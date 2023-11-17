// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AuthData } from '@/app/api/auth/[...nextauth]/route'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
      name: string
      token: string
    }
  }
}
