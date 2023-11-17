'use client'

import { SyntheticEvent, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { MdAdd, MdInfo } from 'react-icons/md'

import { api } from '@/app/api/services'
import { Post } from '@/models/PostModel'
import * as S from '@/components/pages/login/style'

export default function PostsCreatePage() {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [error, setError] = useState<string>('')
  const { data: session } = useSession()
  const router = useRouter()

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()

    try {
      const newPost = await api.createPost(
        { title, description, image } as Post,
        session?.user.token,
      )
      setError('')
      router.refresh()
      router.replace(`/posts/${newPost.id}`)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.response.data.message)
    }
  }

  return (
    <>
      <S.Container>
        <S.Form method="POST" onSubmit={handleSubmit}>
          <S.Title>Criar postagem</S.Title>

          <S.InputContainer>
            <S.Label>Título</S.Label>
            <S.Input
              name="title"
              placeholder="Digite o título da postagem"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.Label>Descrição</S.Label>
            <S.Textarea
              name="description"
              placeholder="Digite o conteúdo da postagem"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.Label>Imagem</S.Label>
            <S.Input
              name="image"
              placeholder="Digite a URL da imagem"
              onChange={(e) => setImage(e.target.value)}
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.Button type="submit">
              <MdAdd size={20} style={{ marginRight: '.4rem' }} />
              Criar
            </S.Button>
          </S.InputContainer>
          {error && (
            <S.Message>
              <MdInfo style={{ marginRight: '.4rem' }} />
              {error}
            </S.Message>
          )}
        </S.Form>
      </S.Container>
    </>
  )
}
