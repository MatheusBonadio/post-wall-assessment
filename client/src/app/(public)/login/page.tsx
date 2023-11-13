'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { SyntheticEvent, useState } from 'react'

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
      <form method="POST" onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            name="email"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">Entrar</button>
        </div>
      </form>
      {error && <div>{error}</div>}
    </>
  )
}
