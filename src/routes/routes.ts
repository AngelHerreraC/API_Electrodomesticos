import {Router} from 'express'

import { userRepository } from './repository';

import { TaskController } from './controller'

const router = Router()

const controller = new TaskController(new userRepository());

router.post('/users', controller.create.bind(controller))

router.get("/users", controller.list.bind(controller));

router.get("/user/:userID", controller.get.bind(controller));

router.put("/user/:userID", controller.update.bind(controller));

router.delete("/user/:userID", controller.remove.bind(controller));

export default router;