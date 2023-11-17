import { Request, Response } from 'express'

import { BadRequestError, NotFoundError } from '../helpers/api-errors'
import { postRepository } from '../repositories/postRepository'

export class PostController {
  async list(req: Request, res: Response) {
    const posts = await postRepository.find({
      select: { comments: { id: true }, user: { id: true, name: true } },
      relations: { user: true, comments: true },
      order: { updated_at: 'DESC' },
    })

    return res.status(200).json(posts)
  }

  async create(req: Request, res: Response) {
    const { title, description, image } = req.body

    if (!title) throw new BadRequestError('O título é obrigatório')

    if (!description) throw new BadRequestError('A descrição é obrigatória')

    const newPost = postRepository.create({
      title,
      description,
      image,
      user: req.user,
    })

    await postRepository.save(newPost)

    return res.status(201).json({ id: newPost.id })
  }

  async update(req: Request, res: Response) {
    const { title, description, image } = req.body
    const { idPost } = req.params

    const post = await postRepository.findOne({
      relations: { user: true },
      select: { user: { id: true } },
      where: { id: idPost },
    })

    if (!post) throw new NotFoundError('O post não existe')

    if (post.user.id !== req.user.id)
      throw new BadRequestError('Você não tem permissão para editar esse post')

    await postRepository.update(idPost, {
      title,
      description,
      image,
    })

    return res.status(204).send()
  }

  async delete(req: Request, res: Response) {
    const { idPost } = req.params

    const post = await postRepository.findOne({
      relations: { user: true },
      select: { user: { id: true } },
      where: { id: idPost },
    })

    if (!post) throw new NotFoundError('O post não existe')

    if (post.user.id !== req.user.id)
      throw new BadRequestError('Você não tem permissão para deletar esse post')

    await postRepository
      .createQueryBuilder()
      .softDelete()
      .where('id = :id', { id: idPost })
      .execute()

    return res.status(204).send()
  }

  async restore(req: Request, res: Response) {
    const { idPost } = req.params

    if (!idPost) throw new BadRequestError('A postagem é obrigatória')

    const post = await postRepository.findOne({
      where: { id: idPost },
      withDeleted: true,
    })

    if (!post) throw new NotFoundError('A postagem não existe')

    await postRepository
      .createQueryBuilder()
      .restore()
      .where('id = :id', { id: idPost })
      .execute()

    return res.status(204).send()
  }

  async find(req: Request, res: Response) {
    const { idPost } = req.params

    const post = await postRepository.findOne({
      relations: { user: true, comments: { user: true } },
      select: {
        user: { id: true, name: true },
      },
      where: { id: idPost },
      order: { comments: { created_at: 'DESC' } },
      withDeleted: true,
    })

    if (!post) throw new NotFoundError('O post não existe')

    return res.status(200).json(post)
  }
}
