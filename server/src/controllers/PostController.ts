import { Request, Response } from 'express'

import { BadRequestError, NotFoundError } from '../helpers/api-errors'
import { postRepository } from '../repositories/postRepository'

export class PostController {
  async list(req: Request, res: Response) {
    const posts = await postRepository.find({
      loadRelationIds: true,
    })

    return res.status(200).json(posts)
  }

  async create(req: Request, res: Response) {
    const { title, description } = req.body

    if (!title) throw new BadRequestError('O título é obrigatório')

    if (!description) throw new BadRequestError('A descrição é obrigatória')

    const newPost = postRepository.create({
      title,
      description,
      user: req.user,
    })

    await postRepository.save(newPost)

    return res.status(201).json({ id: newPost.id })
  }

  async update(req: Request, res: Response) {
    const { title, description } = req.body
    const { idPost } = req.params

    const post = await postRepository.findOne({
      loadRelationIds: true,
      where: { id: idPost },
    })

    if (!post) throw new NotFoundError('O post não existe')

    if (post.user !== req.user.id)
      throw new BadRequestError('Você não tem permissão para editar esse post')

    await postRepository.update(idPost, {
      title,
      description,
    })

    return res.status(204).send()
  }

  async delete(req: Request, res: Response) {
    const { idPost } = req.params

    const post = await postRepository.findOne({
      loadRelationIds: true,
      where: { id: idPost },
    })

    if (!post) throw new NotFoundError('O post não existe')

    if (post.user !== req.user.id)
      throw new BadRequestError('Você não tem permissão para deletar esse post')

    await postRepository.delete(idPost)

    return res.status(204).send()
  }
}
