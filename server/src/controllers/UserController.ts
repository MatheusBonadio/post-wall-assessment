import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { userRepository } from '../repositories/userRepository'
import {
  BadRequestError,
  ForbiddenError,
  NotFoundError,
} from '../helpers/api-errors'

export class UserController {
  async list(req: Request, res: Response) {
    const users = await userRepository.find({
      loadRelationIds: true,
      select: [
        'id',
        'name',
        'email',
        'login',
        'active',
        'created_at',
        'updated_at',
      ],
    })

    return res.status(200).json(users)
  }

  async create(req: Request, res: Response) {
    const { name, email, login, password } = req.body

    if (!name) throw new BadRequestError('O nome é obrigatório')

    if (!email) throw new BadRequestError('O email é obrigatório')

    if (!login) throw new BadRequestError('O login é obrigatório')

    if (!password) throw new BadRequestError('A senha é obrigatória')

    const loginExists = await userRepository.findOneBy({ login })

    if (loginExists) throw new BadRequestError('O login já existe')

    const emailExists = await userRepository.findOneBy({ email })

    if (emailExists) throw new BadRequestError('O email já existe')

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = userRepository.create({
      name,
      email,
      login,
      password: hashPassword,
      active: true,
    })

    await userRepository.save(newUser)

    return res.status(201).json({ id: newUser.id })
  }

  async update(req: Request, res: Response) {
    const { name, email, active } = req.body
    const { idUser } = req.params

    const user = await userRepository.findOneBy({ id: idUser })

    if (!user) throw new NotFoundError('O usuário não existe')

    await userRepository.update(idUser, {
      name,
      email,
      active,
    })

    return res.status(204).send()
  }

  async delete(req: Request, res: Response) {
    const { idUser } = req.params

    const user = await userRepository.findOneBy({ id: idUser })

    if (!user) throw new NotFoundError('O usuário não existe')

    await userRepository.delete(idUser)

    return res.status(204).send()
  }

  async profile(req: Request, res: Response) {
    return res.status(200).json(req.user)
  }

  async signIn(req: Request, res: Response) {
    const { login, password } = req.body

    if (!login) throw new BadRequestError('O login é obrigatório')

    if (!password) throw new BadRequestError('A senha é obrigatória')

    const user = await userRepository.findOneBy({ login })

    if (!user) throw new BadRequestError('Usuário ou senha incorretos')

    if (!user.active) throw new ForbiddenError('Usuário inativo')

    const checkPassword = await bcrypt.compare(password, user.password)

    if (!checkPassword) throw new BadRequestError('Usuário ou senha incorretos')

    const token = jwt.sign({ user_id: user.id }, process.env.JWT_PASS ?? '', {
      expiresIn: process.env.JWT_EXPIRES_IN ?? '30d',
    })

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userLogin } = user

    return res.status(200).json({
      user: userLogin,
      token,
    })
  }

  async signOut(req: Request, res: Response) {
    // const { login, password } = req.body

    return res.status(200).json({
      message: 'Logout realizado com sucesso',
    })
  }
}
