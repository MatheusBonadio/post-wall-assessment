import { Post } from './PostModel'

export interface User {
  id: string
  name: string
  email: string
  login: string
  password: string
  active: boolean

  posts: Post[]

  created_at: Date
  updated_at: Date
}
