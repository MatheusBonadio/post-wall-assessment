import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { getServerSession } from 'next-auth'

import NextAuthSessionProvider from '@/providers/SessionProvider'

import { nextAuthOptions } from './api/auth/[...nextauth]/route'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Post wall',
  description: 'Platform innovation management',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(nextAuthOptions)

  return (
    <html lang="pt_br">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <h1>Sistema: {session?.user.name}</h1>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              {session && (
                <li>
                  <Link href="/posts/create">Criar post</Link>
                </li>
              )}
              {!session && (
                <li>
                  <Link href="/login">Login</Link>
                </li>
              )}
            </ul>
          </nav>
          <hr />

          {children}
        </NextAuthSessionProvider>
      </body>
    </html>
  )
}
