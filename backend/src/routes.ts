import express from 'express'

import ClassesController from './controllers/classesController'
import ConnectionsController from './controllers/ConnectionsController'

const routes = express.Router()

const classesController = new ClassesController()
const connectionController = new ConnectionsController()

routes.post('/classes', classesController.create)
routes.get('/classes', classesController.index)

routes.get('/connections', connectionController.index)
routes.post('/connections', connectionController.create)

export default routes
