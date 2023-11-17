'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { SyntheticEvent, useState } from 'react'
import { MdInfo, MdLogin } from 'react-icons/md'

import * as S from '@/components/pages/login/style'

export default function LoginPage() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      setError(result.error)
      return
    }

    router.refresh()
  }

  return (
    <>
      <S.Container>
        <S.Form method="POST" onSubmit={handleSubmit}>
          <S.Title>Login</S.Title>
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
              <MdLogin size={20} style={{ marginRight: '.4rem' }} />
              Entrar
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
