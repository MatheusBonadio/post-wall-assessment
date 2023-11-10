import { Router } from 'express'

import { UserController } from './controllers/UserController'
import { authMiddleware } from './middlewares/authMiddleware'
const routes = Router()

routes.post('/users/signIn', new UserController().signIn)

routes.use(authMiddleware)

routes.post('/users/signOut', new UserController().signOut)

routes.get('/users', new UserController().list)
routes.post('/users', new UserController().create)
routes.patch('/users/:idUser', new UserController().update)
routes.delete('/users/:idUser', new UserController().delete)
routes.get('/users/profile', new UserController().profile)

export default routes
