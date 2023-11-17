import type { Metadata } from 'next'

import NextAuthSessionProvider from '@/providers/SessionProvider'
import StyledComponentsRegistry from '@/providers/StyledProvider'
import { Header } from '@/components/Header'
import GlobalStyle from '@/styles/GlobalStyle'

export const metadata: Metadata = {
  title: 'Post wall',
  description: 'Platform innovation management',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextAuthSessionProvider>
      <StyledComponentsRegistry>
        <GlobalStyle />
        <html lang="pt_br">
          <head>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link
              href="http://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900&display=swap"
              rel="stylesheet"
            />
          </head>
          <body>
            <Header></Header>
            <div style={{ marginLeft: '250px' }}>{children}</div>
          </body>
        </html>
      </StyledComponentsRegistry>
    </NextAuthSessionProvider>
  )
}
