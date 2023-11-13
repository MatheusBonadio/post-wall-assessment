import { User } from 'next-auth'

export interface Comment {
  id: string
  description: string

  user: User

  created_at: Date
  updated_at: Date
}
