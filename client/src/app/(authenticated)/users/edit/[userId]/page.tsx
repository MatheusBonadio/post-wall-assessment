import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { api } from '@/app/api/services'

import Form from './components/Form'

export default async function PostsEditPage({
  params,
}: {
  params: { userId: string }
}) {
  const session = await getServerSession(nextAuthOptions)
  const user = await api.getProfile(session?.user.token)

  if (session?.user.id !== params.userId) {
    redirect('/login')
  }

  return (
    <>
      <Form user={user} token={session.user.token} />
    </>
  )
}
