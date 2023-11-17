'use client'

import { useRouter } from 'next/navigation'
import { SyntheticEvent, useEffect, useState } from 'react'
import { MdSave } from 'react-icons/md'

import { api } from '@/app/api/services'
import { Post } from '@/models/PostModel'
import * as S from '@/components/pages/login/style'

interface Props {
  post: Post
  token: string | undefined
}

export default function Form({ post, token }: Props) {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    setTitle(post.title)
    setDescription(post.description)
    setImage(post.image)
  }, [post])

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()

    try {
      await api.updatePost(
        { id: post.id, title, description, image } as Post,
        token,
      )
      // setError('')
      router.refresh()
      router.replace(`/posts/${post.id}`)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // setError(error.response.data.message)
    }
  }

  return (
    <>
      <S.Container>
        <S.Form method="POST" onSubmit={handleSubmit}>
          <S.Title>Editar postagem</S.Title>

          <S.InputContainer>
            <S.Label>Título</S.Label>
            <S.Input
              name="title"
              defaultValue={post.title}
              placeholder="Digite o título da postagem"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.Label>Descrição</S.Label>
            <S.Textarea
              name="description"
              defaultValue={post.description}
              placeholder="Digite o conteúdo da postagem"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.Label>Imagem</S.Label>
            <S.Input
              name="image"
              defaultValue={post.image}
              placeholder="Digite a URL da imagem"
              onChange={(e) => setImage(e.target.value)}
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.Label>Data de criação</S.Label>
            <S.Input defaultValue={post.created_at.toString()} disabled />
          </S.InputContainer>

          <S.InputContainer>
            <S.Label>Data de atualização</S.Label>
            <S.Input defaultValue={post.updated_at.toString()} disabled />
          </S.InputContainer>

          <S.InputContainer>
            <S.Button type="submit">
              <MdSave size={20} style={{ marginRight: '.4rem' }} />
              Salvar
            </S.Button>
          </S.InputContainer>
        </S.Form>
      </S.Container>
    </>
  )
}
