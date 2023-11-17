'use client'

import { useRouter } from 'next/navigation'
import { SyntheticEvent, useEffect, useState } from 'react'
import { MdSave } from 'react-icons/md'

import { api } from '@/app/api/services'
import { Comment } from '@/models/CommentModel'
import * as S from '@/components/pages/login/style'

interface Props {
  comment: Comment
  postId: string
  token: string | undefined
}

export default function Form({ comment, postId, token }: Props) {
  const [description, setDescription] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    setDescription(comment.description)
  }, [comment])

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()

    try {
      await api.updateComment({ id: comment.id, description } as Comment, token)
      // setError('')
      router.refresh()
      router.replace(`/posts/${postId}`)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // setError(error.response.data.message)
    }
  }

  return (
    <>
      <S.Container>
        <S.Form method="POST" onSubmit={handleSubmit}>
          <S.Title>Editar comentário</S.Title>

          <S.InputContainer>
            <S.Label>Título da postagem</S.Label>
            <S.Input defaultValue={comment.post.title} disabled />
          </S.InputContainer>

          <S.InputContainer>
            <S.Label>Comentário</S.Label>
            <S.Textarea
              style={{ height: '4rem' }}
              name="description"
              defaultValue={comment.description}
              placeholder="Digite um comentário"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.Label>Data de criação</S.Label>
            <S.Input defaultValue={comment.created_at.toString()} disabled />
          </S.InputContainer>

          <S.InputContainer>
            <S.Label>Data de atualização</S.Label>
            <S.Input defaultValue={comment.updated_at.toString()} disabled />
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
