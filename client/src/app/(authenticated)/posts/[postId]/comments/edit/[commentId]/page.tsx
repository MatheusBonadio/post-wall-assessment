import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { api } from '@/app/api/services'

import Form from './components/Form'

export default async function CommentsEditPage({
  params,
}: {
  params: { postId: string; commentId: string }
}) {
  const session = await getServerSession(nextAuthOptions)
  const comment = await api.findCommentById(params.commentId)

  if (session?.user.id !== comment.user.id) {
    redirect('/login')
  }

  return (
    <>
      <Form
        comment={comment}
        postId={params.postId}
        token={session.user.token}
      />
    </>
  )
}
