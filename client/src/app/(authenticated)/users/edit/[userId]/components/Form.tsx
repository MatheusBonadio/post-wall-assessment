'use client'

import { useRouter } from 'next/navigation'
import { SyntheticEvent, useEffect, useState } from 'react'
import { MdSave } from 'react-icons/md'

import { api } from '@/app/api/services'
import { User } from '@/models/UserModel'
import * as S from '@/components/pages/login/style'

interface Props {
  user: User
  token: string | undefined
}

export default function Form({ user, token }: Props) {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    setName(user.name)
    setEmail(user.email)
  }, [user])

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()

    try {
      await api.updateUser({ id: user.id, name, email } as User, token)
      // setError('')
      // router.refresh()
      router.replace(`/`)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // setError(error.response.data.message)
    }
  }

  return (
    <>
      <S.Container>
        <S.Form method="POST" onSubmit={handleSubmit}>
          <S.Title>Editar usuário</S.Title>

          <S.InputContainer>
            <S.Label>Nome</S.Label>
            <S.Input
              name="name"
              placeholder="Digite o seu nome"
              defaultValue={user.name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.Label>Email</S.Label>
            <S.Input
              name="email"
              type="email"
              defaultValue={user.email}
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.Label>Data de criação</S.Label>
            <S.Input defaultValue={user.created_at.toString()} disabled />
          </S.InputContainer>

          <S.InputContainer>
            <S.Label>Data de atualização</S.Label>
            <S.Input defaultValue={user.updated_at.toString()} disabled />
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
