import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
  MdChat,
  MdEdit,
  MdDelete,
  MdThumbUp,
  MdThumbDown,
  MdAdd,
} from 'react-icons/md'

import { api } from '@/app/api/services'
import { Post } from '@/models/PostModel'
import * as S from '@/components/pages/home/style'

import { nextAuthOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(nextAuthOptions)
  const posts = await api.getPosts()

  return (
    <S.Container>
      <Link href={`/posts/create`}>
        <S.CreatePost>
          <MdAdd size={23} />
          <span style={{ marginLeft: '.5rem', fontWeight: '500' }}>
            Crie um post
          </span>
        </S.CreatePost>
      </Link>
      <S.PostContainer>
        {posts.map((post: Post) => (
          <S.Post key={post.id}>
            <S.PostBody>
              <S.Title>
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </S.Title>
              <S.AuthorContainer>
                <S.AuthorImg>
                  {post.user.name
                    .split(' ')
                    .map((name, index, arr) =>
                      index === 0 || index === arr.length - 1
                        ? name.charAt(0)
                        : '',
                    )
                    .join('')
                    .toUpperCase()}
                </S.AuthorImg>
                <S.DateContainer>
                  <S.Author>{post.user.name}</S.Author>
                  <S.Date>
                    {post.updated_at !== post.created_at && 'editado '}
                    {formatDistance(new Date(post.updated_at), Date.now(), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </S.Date>
                </S.DateContainer>
              </S.AuthorContainer>
              <S.Description>{post.description}</S.Description>

              <S.Info>
                <Link href={`/posts/${post.id}/#comments`}>
                  <S.IndicatorHover>
                    <MdChat size={19} />
                    <span style={{ marginLeft: '.3rem' }}>
                      {post.comments.length} resposta(s)
                    </span>
                  </S.IndicatorHover>
                </Link>

                <S.IndicatorHover>
                  <MdThumbUp size={19} />
                  <span style={{ marginLeft: '.3rem' }}>0</span>
                </S.IndicatorHover>

                <S.IndicatorHover>
                  <MdThumbDown size={19} />
                  <span style={{ marginLeft: '.3rem' }}>0</span>
                </S.IndicatorHover>

                {session?.user.id === post.user.id && (
                  <>
                    <Link href={`/posts/edit/${post.id}`}>
                      <S.IndicatorHover>
                        <MdEdit size={19} />
                        <span style={{ marginLeft: '.3rem' }}>Editar</span>
                      </S.IndicatorHover>
                    </Link>

                    <Link href={`/posts/delete/${post.id}`}>
                      <S.IndicatorHover>
                        <MdDelete size={19} />
                        <span style={{ marginLeft: '.3rem' }}>Excluir</span>
                      </S.IndicatorHover>
                    </Link>
                  </>
                )}
              </S.Info>
            </S.PostBody>
            {post.image && (
              <S.PostImg
                style={{
                  backgroundImage: `url('${post.image}')`,
                }}
              />
            )}
          </S.Post>
        ))}
      </S.PostContainer>
    </S.Container>
  )
}
