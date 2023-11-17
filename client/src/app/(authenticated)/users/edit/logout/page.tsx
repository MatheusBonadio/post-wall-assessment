'use client'

import { signOut } from 'next-auth/react'
import React from 'react'

export default async function UsersLogout() {
  await signOut({
    redirect: true,
    callbackUrl: '/',
  })

  return <></>
}
