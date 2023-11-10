import { appDataSource } from '../data-source'
import { Comment } from '../entities/Comment'

export const commentRepository = appDataSource.getRepository(Comment)
