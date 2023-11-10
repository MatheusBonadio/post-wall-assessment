import { Request, Response } from 'express'

import { BadRequestError, NotFoundError } from '../helpers/api-errors'
import { postRepository } from '../repositories/postRepository'
import { commentRepository } from '../repositories/commentRepository'

export class CommentController {
  async list(req: Request, res: Response) {
    const comments = await commentRepository.find({
      loadRelationIds: true,
    })

    return res.status(200).json(comments)
  }

  async create(req: Request, res: Response) {
    const { description } = req.body
    const { idPost } = req.params

    if (!description) throw new BadRequestError('A descrição é obrigatória')

    if (!idPost) throw new BadRequestError('O post é obrigatório')

    const post = await postRepository.findOneBy({ id: idPost })

    if (!post) throw new NotFoundError('O post não existe')

    const newComment = commentRepository.create({
      description,
      user: req.user,
      post,
    })

    await commentRepository.save(newComment)

    return res.status(201).json({ id: newComment.id })
  }

  async update(req: Request, res: Response) {
    const { description } = req.body
    const { idComment } = req.params

    const comment = await commentRepository.findOne({
      loadRelationIds: true,
      where: { id: idComment },
    })

    if (!comment) throw new NotFoundError('O comentário não existe')

    if (comment.user !== req.user.id)
      throw new BadRequestError(
        'Você não tem permissão para editar esse comentário',
      )

    await commentRepository.update(idComment, {
      description,
    })

    return res.status(204).send()
  }

  async delete(req: Request, res: Response) {
    const { idComment } = req.params

    const comment = await commentRepository.findOne({
      loadRelationIds: true,
      where: { id: idComment },
    })

    if (!comment) throw new NotFoundError('O comentário não existe')

    if (comment.user !== req.user.id && comment.post.user !== req.user.id)
      throw new BadRequestError(
        'Você não tem permissão para deletar esse comentário',
      )

    await commentRepository.delete(idComment)

    return res.status(204).send()
  }
}
