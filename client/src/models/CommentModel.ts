import { Post } from './PostModel'
import { User } from './UserModel'

export interface Comment {
  id: string
  description: string

  post: Post
  user: User
  deleted_by: string

  created_at: Date
  updated_at: Date
  deleted_at: Date
}
