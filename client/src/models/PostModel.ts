import { Comment } from './CommentModel'
import { User } from './UserModel'

export interface Post {
  id: string
  title: string
  description: string
  image: string

  comments: Comment[]
  user: User

  created_at: Date
  updated_at: Date
  deleted_at: Date
}
