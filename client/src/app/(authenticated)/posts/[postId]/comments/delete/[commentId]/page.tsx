import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { api } from '@/app/api/services'

import Button from './components/Button'

// import Form from './components/Form'

export default async function CommentsEditPage({
  params,
}: {
  params: { postId: string; commentId: string }
}) {
  const session = await getServerSession(nextAuthOptions)
  const post = await api.findPostById(params.postId)
  const comment = await api.findCommentById(params.commentId)

  if (session?.user.id !== comment.user.id) {
    if (session?.user.id !== post.user.id) {
      redirect('/login')
    }
  }

  return (
    <>
      <Button comment={comment} postId={post.id} token={session.user.token} />
    </>
  )
}
