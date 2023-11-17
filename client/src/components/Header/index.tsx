import { getServerSession } from 'next-auth'
import {
  MdAdd,
  MdLogin,
  MdLogout,
  MdOutlineDescription,
  MdOutlineEdit,
  MdOutlineHome,
  MdPersonAdd,
} from 'react-icons/md'

import * as S from '@/components/Header/style'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'

export const Header = async () => {
  const session = await getServerSession(nextAuthOptions)

  return (
    <>
      <S.HeaderContainer>
        <S.Logo href="/">
          <div></div>
        </S.Logo>
        <S.Menu>
          <S.Category>POSTS</S.Category>
          <S.List href="/">
            <MdOutlineHome size={23} />
            <span>Home</span>
          </S.List>
          {session && (
            <>
              <S.List href="/posts/create">
                <MdAdd size={23} />
                <span>Criar</span>
              </S.List>
              <S.List href="/">
                <MdOutlineDescription size={23} />
                <span>Relatório</span>
              </S.List>
            </>
          )}
          <S.Category>USUÁRIO</S.Category>
          {session && (
            <>
              <S.List href={`/users/edit/${session.user.id}`}>
                <MdOutlineEdit size={23} />
                <span>Alterar</span>
              </S.List>
              <S.List href={`/users/logout`}>
                <MdLogout size={23} />
                <span>Sair</span>
              </S.List>
            </>
          )}
          {!session && (
            <>
              <S.List href="/login">
                <MdLogin size={23} />
                <span>Login</span>
              </S.List>
              <S.List href="/users/create">
                <MdPersonAdd size={23} />
                <span>Cadastre-se</span>
              </S.List>
            </>
          )}
        </S.Menu>

        {session && (
          <S.User>
            <S.UserImg>
              {session.user.name
                .split(' ')
                .map((name, index, arr) =>
                  index === 0 || index === arr.length - 1 ? name.charAt(0) : '',
                )
                .join('')
                .toUpperCase()}
            </S.UserImg>
            <S.Info>
              <div style={{ fontWeight: 300, fontSize: '.9rem' }}>
                Bem vindo(a),
              </div>
              <a>{session?.user.name}</a>
            </S.Info>
          </S.User>
        )}
      </S.HeaderContainer>
    </>
  )
}
