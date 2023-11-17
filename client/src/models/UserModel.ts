import { Comment } from './CommentModel'
import { Post } from './PostModel'

export interface User {
  id: string
  name: string
  email: string
  password: string
  active: boolean

  posts: Post[]
  comments: Comment[]

  created_at: Date
  updated_at: Date
}
