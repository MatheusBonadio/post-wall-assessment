import axios from 'axios'

import { Post } from '@/models/PostModel'

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

// async function updateDevice(device: Device, token: string): Promise<Device> {
//   const response = await axiosInstance.patch<Device>(
//     `/devices/${device.id}`,
//     {
//       os: device.os,
//       model: device.model,
//       name: device.name,
//       push_token: device.push_token,
//       user: device.user,
//     },
//     { headers: { Authorization: `Bearer ${token}` } },
//   )

//   return response.data
// }

// async function deleteDevice(device: Device, token: string): Promise<Device> {
//   const response = await axiosInstance.delete<Device>(`/devices/${device.id}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   })

//   return response.data
// }

// async function restoreDevice(device: Device, token: string): Promise<Device> {
//   const response = await axiosInstance.patch<Device>(
//     `/devices/${device.id}/restore`,
//     {},
//     { headers: { Authorization: `Bearer ${token}` } },
//   )

//   return response.data
// }

// async function findDevicesByPushToken(
//   push_token: string,
//   token: string,
// ): Promise<Device[]> {
//   const response = await axiosInstance.get<Device[]>(
//     `/devices/pushToken/${push_token}`,
//     {
//       headers: { Authorization: `Bearer ${token}` },
//     },
//   )

//   return response.data
// }

async function createPost(post: Post, token?: string): Promise<Post> {
  const response = await axiosInstance.post<Post>(
    `/posts`,
    {
      title: post.title,
      description: post.description,
    },
    { headers: { Authorization: `Bearer ${token}` } },
  )

  return response.data
}

async function getPosts(): Promise<Post[]> {
  const response = await axiosInstance.get<Post[]>(`/posts`)

  return response.data
}

async function findPostById(postId: string): Promise<Post> {
  const response = await axiosInstance.get<Post>(`/posts/${postId}`)

  return response.data
}

// async function getSolicitations(
//   gate: Gate,
//   token: string,
// ): Promise<Solicitation[]> {
//   const response = await axiosInstance.get<Solicitation[]>(
//     `/gates/${gate.id}/solicitations`,
//     {
//       headers: { Authorization: `Bearer ${token}` },
//       params: { limit: 10, offset: 0 },
//     },
//   )

//   return response.data
// }

// async function createSolicitation(
//   gate: Gate,
//   user: User,
//   token: string,
// ): Promise<Solicitation> {
//   const response = await axiosInstance.post<Solicitation>(
//     `/solicitations/${gate.id}/gate`,
//     { message: 3, user_id: user.id },
//     { headers: { Authorization: `Bearer ${token}` } },
//   )

//   return response.data
// }

// async function deleteSolicitation(
//   solicitation: Solicitation | null,
//   token: string,
// ): Promise<Solicitation> {
//   const response = await axiosInstance.delete<Solicitation>(
//     `/solicitations/${solicitation?.id}`,
//     { headers: { Authorization: `Bearer ${token}` } },
//   )

//   return response.data
// }

export const api = {
  signIn,

  createPost,
  getPosts,
  findPostById,
  // signOut,

  // createDevice,
  // updateDevice,
  // deleteDevice,
  // restoreDevice,
  // findDevicesByPushToken,

  // getGates,

  // getSolicitations,
  // createSolicitation,
  // deleteSolicitation,
}
