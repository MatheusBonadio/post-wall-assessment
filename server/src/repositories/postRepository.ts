import { appDataSource } from '../data-source'
import { Post } from '../entities/Post'

export const postRepository = appDataSource.getRepository(Post)
