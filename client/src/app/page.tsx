import Link from 'next/link'

import { api } from '@/app/api/services'
import { Post } from '@/models/PostModel'

export default async function Home() {
  const posts = await api.getPosts()

  return (
    <>
      <h2>Posts</h2>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
