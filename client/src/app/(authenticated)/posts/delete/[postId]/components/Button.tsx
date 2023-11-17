'use client'

import { useRouter } from 'next/navigation'
import { MdDelete } from 'react-icons/md'

import { api } from '@/app/api/services'
import * as S from '@/components/pages/login/style'
import { Post } from '@/models/PostModel'

interface Props {
  post: Post
  token: string | undefined
}

export default function Button({ post, token }: Props) {
  const router = useRouter()

  console.log(post)

  return (
    <>
      {/* <button
        onClick={async () => {
          await api.deletePost(post.id, token)
          router.refresh()
          router.replace(`/`)
        }}
      >
        Deletar
      </button> */}
      <S.Container>
        <S.FormModal>
          <S.Title>Excluir postagem</S.Title>

          <S.InputContainer>
            <S.Label>Título</S.Label>
            <S.Input
              name="title"
              defaultValue={post.title}
              placeholder="Digite o título da postagem"
              disabled
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.Label>Descrição</S.Label>
            <S.Textarea
              name="description"
              defaultValue={post.description}
              placeholder="Digite o conteúdo da postagem"
              disabled
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.Label>Imagem</S.Label>
            <S.Input
              name="image"
              defaultValue={post.image}
              placeholder="Digite a URL da imagem"
              disabled
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
            <S.ButtonDelete
              onClick={async () => {
                await api.deletePost(post.id, token)
                router.refresh()
                router.replace(`/`)
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
