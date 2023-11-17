import { getServerSession } from 'next-auth'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { MdDelete, MdEdit, MdThumbDown, MdThumbUp } from 'react-icons/md'
import Link from 'next/link'

import { Comment } from '@/models/CommentModel'
import { api } from '@/app/api/services'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import * as S from '@/components/pages/posts/list/style'

import Form from './components/Form'

export default async function UsersDetailsPage({
  params,
}: {
  params: { postId: string }
}) {
  const session = await getServerSession(nextAuthOptions)
  const post = await api.findPostById(params.postId)

  return (
    <S.Container>
      {post.image && (
        <S.PostImg
          style={{
            backgroundImage: `url('${post.image}')`,
          }}
        />
      )}
      <S.Title>{post.title}</S.Title>
      <S.AuthorContainer>
        <S.AuthorImg>
          {post.user.name
            .split(' ')
            .map((name, index, arr) =>
              index === 0 || index === arr.length - 1 ? name.charAt(0) : '',
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

      <S.Hr id="comments" />

      <S.Subtitle>
        Comentários (
        {post.comments.filter((comment) => !comment.deleted_at).length})
      </S.Subtitle>
      {session && <Form id={post.id} token={session?.user.token} />}

      {post.comments.map((comment: Comment) => (
        <S.AuthorContainer key={comment.id}>
          {!comment.deleted_at ? (
            <>
              <S.AuthorImg>
                {comment.user.name
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
                <S.Author style={{ display: 'flex', alignItems: 'center' }}>
                  {comment.user.name}
                  <S.Date style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ margin: '0 .3rem' }}>
                      {comment.updated_at !== comment.created_at && 'editado '}
                      {formatDistance(
                        new Date(comment.updated_at),
                        Date.now(),
                        {
                          addSuffix: true,
                          locale: ptBR,
                        },
                      )}
                    </span>
                    {session?.user.id === comment.user.id && (
                      <Link
                        href={`/posts/${post.id}/comments/edit/${comment.id}`}
                      >
                        <S.IconHover>
                          <MdEdit size={15} />
                        </S.IconHover>
                      </Link>
                    )}
                    {(session?.user.id === comment.user.id ||
                      session?.user.id === post.user.id) && (
                      <Link
                        href={`/posts/${post.id}/comments/delete/${comment.id}`}
                      >
                        <S.IconHover>
                          <MdDelete size={15} />
                        </S.IconHover>
                      </Link>
                    )}
                  </S.Date>
                </S.Author>
                <S.Date>{comment.description}</S.Date>
              </S.DateContainer>
            </>
          ) : (
            <>
              <S.AuthorImg
                style={{
                  backgroundColor: '#eee',
                  color: '#999',
                  borderColor: '#999',
                }}
              >
                {comment.user.name
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
                <S.Author>{comment.user.name} </S.Author>
                <S.Date>
                  Comentário apagado pelo{' '}
                  {comment.deleted_by === post.user.id ? 'autor' : 'usuário'}
                </S.Date>
              </S.DateContainer>
            </>
          )}
        </S.AuthorContainer>
      ))}
    </S.Container>
  )
}
