import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { api } from '@/app/api/services'

import Button from './components/Button'

// import Form from './components/Form'

export default async function PostsDeletePage({
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
      <Button post={post} token={session.user.token} />
    </>
  )
}
