import { Router } from 'express'

import { UserController } from './controllers/UserController'
import { authMiddleware } from './middlewares/authMiddleware'
import { PostController } from './controllers/PostController'
import { CommentController } from './controllers/CommentController'

const routes = Router()

routes.post('/signIn', new UserController().signIn)
routes.post('/users', new UserController().create)
routes.get('/posts', new PostController().list)
routes.get('/comments', new CommentController().list)
routes.get('/posts/:idPost', new PostController().find)

routes.use(authMiddleware)

routes.get('/users', new UserController().list)
routes.patch('/users/:idUser', new UserController().update)
routes.delete('/users/:idUser', new UserController().delete)
routes.get('/users/profile', new UserController().profile)

routes.post('/posts', new PostController().create)
routes.patch('/posts/:idPost', new PostController().update)
routes.delete('/posts/:idPost', new PostController().delete)

routes.post('/posts/:idPost/comments', new CommentController().create)
routes.patch('/comments/:idComment', new CommentController().update)
routes.delete('/comments/:idComment', new CommentController().delete)

export default routes
