'use client'

import { SyntheticEvent, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { api } from '@/app/api/services'
import { Post } from '@/models/PostModel'

export default function PostsCreatePage() {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [error, setError] = useState<string>('')
  const { data: session } = useSession()
  const router = useRouter()

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()

    try {
      const newPost = await api.createPost(
        { title, description } as Post,
        session?.user.token,
      )
      setError('')
      router.replace(`/posts/${newPost.id}`)
    } catch (error: any) {
      setError(error.response.data.message)
    }
  }

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            name="email"
            placeholder="Digite o título da postagem"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Descrição:</label>
          <input
            placeholder="Digite a descrição da postagem"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
      {error && <div>{error}</div>}
    </>
  )
}
