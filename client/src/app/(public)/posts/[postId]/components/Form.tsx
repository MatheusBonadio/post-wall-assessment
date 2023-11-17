'use client'

import { useRouter } from 'next/navigation'
import { SyntheticEvent, useRef, useState } from 'react'
import { MdSend } from 'react-icons/md'

import { api } from '@/app/api/services'
import { Comment } from '@/models/CommentModel'

import * as S from './style'

interface Props {
  id: string
  token: string | undefined
}

export default function Form({ id, token }: Props) {
  const [description, setDescription] = useState<string>('')
  const descriptionInput = useRef(null)
  const router = useRouter()

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()

    await api.createComment(id, { description } as Comment, token)
    descriptionInput.current.value = ''

    router.refresh()
  }

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <S.FormContainer>
          <S.TextArea
            name="description"
            placeholder="Digite o comentário"
            ref={descriptionInput}
            required
            onChange={(e) => setDescription(e.target.value)}
          />

          <S.Button>
            <MdSend size={20} />
          </S.Button>
        </S.FormContainer>
      </form>
    </>
  )
}
