'use client'

import { signOut } from 'next-auth/react'

export default async function UsersLogout() {
  await signOut({
    redirect: true,
    callbackUrl: '/',
  })

  return <></>
}
