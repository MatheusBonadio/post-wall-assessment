import axios from 'axios'

import { Post } from '@/models/PostModel'
import { User } from '@/models/UserModel'
import { Comment } from '@/models/CommentModel'

import { AuthData } from './auth/[...nextauth]/route'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3002/api',
})

async function signIn(email?: string, password?: string): Promise<AuthData> {
  const response = await axiosInstance.post<AuthData>(`/signIn`, {
    email,
    password,
  })

  return response.data
}

async function createUser(user: User): Promise<User> {
  const response = await axiosInstance.post<User>(`/users`, {
    name: user.name,
    email: user.email,
    password: user.password,
  })

  return response.data
}

async function updateUser(user: User, token?: string): Promise<User> {
  const response = await axiosInstance.patch<User>(
    `/users/${user.id}`,
    {
      name: user.name,
      email: user.email,
    },
    { headers: { Authorization: `Bearer ${token}` } },
  )

  return response.data
}

async function getProfile(token?: string): Promise<User> {
  const response = await axiosInstance.get<User>(`/users/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  })

  return response.data
}

async function getPosts(): Promise<Post[]> {
  const response = await axiosInstance.get<Post[]>(`/posts`)

  return response.data
}

async function createPost(post: Post, token?: string): Promise<Post> {
  const response = await axiosInstance.post<Post>(
    `/posts`,
    {
      title: post.title,
      description: post.description,
      image: post.image,
    },
    { headers: { Authorization: `Bearer ${token}` } },
  )

  return response.data
}

async function updatePost(post: Post, token?: string): Promise<Post> {
  const response = await axiosInstance.patch<Post>(
    `/posts/${post.id}`,
    {
      title: post.title,
      description: post.description,
      image: post.image,
    },
    { headers: { Authorization: `Bearer ${token}` } },
  )

  return response.data
}

async function deletePost(postId: string, token?: string): Promise<Post> {
  const response = await axiosInstance.delete<Post>(`/posts/${postId}`, {
    headers: { Authorization: `Bearer ${token}` },
  })

  return response.data
}

async function findPostById(postId: string): Promise<Post> {
  const response = await axiosInstance.get<Post>(`/posts/${postId}`)

  return response.data
}

async function createComment(
  postId: string,
  comment: Comment,
  token?: string,
): Promise<Comment> {
  const response = await axiosInstance.post<Comment>(
    `/posts/${postId}/comments`,
    {
      description: comment.description,
    },
    { headers: { Authorization: `Bearer ${token}` } },
  )

  return response.data
}

async function updateComment(
  comment: Comment,
  token?: string,
): Promise<Comment> {
  const response = await axiosInstance.patch<Comment>(
    `/comments/${comment.id}`,
    {
      description: comment.description,
    },
    { headers: { Authorization: `Bearer ${token}` } },
  )

  return response.data
}

async function findCommentById(commentId: string): Promise<Comment> {
  const response = await axiosInstance.get<Comment>(`/comments/${commentId}`)

  return response.data
}

async function deleteComment(
  commentId: string,
  token?: string,
): Promise<Comment> {
  const response = await axiosInstance.delete<Comment>(
    `/comments/${commentId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  )

  return response.data
}

export const api = {
  signIn,

  createUser,
  updateUser,
  getProfile,

  getPosts,
  createPost,
  updatePost,
  deletePost,
  findPostById,

  createComment,
  updateComment,
  deleteComment,
  findCommentById,
}
