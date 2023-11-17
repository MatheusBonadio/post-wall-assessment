import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { api } from '@/app/api/services'

import Form from './components/Form'

export default async function PostsEditPage({
  params,
}: {
  params: { postId: string }
}) {
  const session = await getServerSession(nextAuthOptions)
  const post = await api.findPostById(params.postId)

  if (session?.user.id !== post.user.id) {
    redirect('/login')
  }

  return (
    <>
      <Form post={post} token={session.user.token} />
    </>
  )
}
