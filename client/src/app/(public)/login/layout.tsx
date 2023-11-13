import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'

export const metadata: Metadata = {
  title: 'Post wall - Login',
  description: 'Platform innovation management',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(nextAuthOptions)

  if (session) {
    redirect('/')
  }

  return <>{children}</>
}
