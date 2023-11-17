'use client'

import { SyntheticEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { MdInfo, MdPersonAdd } from 'react-icons/md'

import { api } from '@/app/api/services'
import { User } from '@/models/UserModel'
import * as S from '@/components/pages/login/style'

export default function UsersCreatePage() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [error, setError] = useState<string>('')
  const router = useRouter()

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()

    try {
      await api.createUser({ name, email, password } as User)
      setError('')

      router.replace(`/`)
    } catch (error: any) {
      setError(error.response.data.message)
    }
  }

  return (
    <>
      <S.Container>
        <S.Form method="POST" onSubmit={handleSubmit}>
          <S.Title>Criar usuário</S.Title>

          <S.InputContainer>
            <S.Label>Nome</S.Label>
            <S.Input
              name="name"
              placeholder="Digite o seu nome"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.Label>Email</S.Label>
            <S.Input
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.Label>Senha</S.Label>
            <S.Input
              type="password"
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.Button type="submit">
              <MdPersonAdd size={20} style={{ marginRight: '.4rem' }} />
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
