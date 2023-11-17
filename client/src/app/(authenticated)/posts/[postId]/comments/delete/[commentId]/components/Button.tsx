'use client'

import { useRouter } from 'next/navigation'
import { MdDelete } from 'react-icons/md'

import { api } from '@/app/api/services'
import { Comment } from '@/models/CommentModel'
import * as S from '@/components/pages/login/style'

interface Props {
  comment: Comment
  postId: string
  token: string | undefined
}

export default function Button({ comment, postId, token }: Props) {
  const router = useRouter()

  return (
    <>
      <S.Container>
        <S.FormModal>
          <S.Title>Excluir comentário</S.Title>

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
              disabled
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
            <S.ButtonDelete
              onClick={async () => {
                await api.deleteComment(comment.id, token)
                router.refresh()
                router.replace(`/posts/${postId}`)
              }}
            >
              <MdDelete size={20} style={{ marginRight: '.4rem' }} />
              Excluir
            </S.ButtonDelete>
          </S.InputContainer>
        </S.FormModal>
      </S.Container>
    </>
  )
}
