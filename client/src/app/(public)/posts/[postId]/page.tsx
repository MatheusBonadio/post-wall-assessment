import { api } from '@/app/api/services'
import { Comment } from '@/models/CommentModel'

export default async function UsersDetailsPage({
  params,
}: {
  params: { postId: string }
}) {
  const post = await api.findPostById(params.postId)

  return (
    <>
      <h2>
        Post: {post.title} por {post.user.name}
      </h2>
      <span>{post.description}</span>
      <h3>Comentários</h3>
      {post.comments.map((comment: Comment) => (
        <div key={comment.id}>
          <span>
            {comment.description} por {comment.user.name}
          </span>
        </div>
      ))}
    </>
  )
}
