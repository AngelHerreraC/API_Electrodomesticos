import {Router} from 'express'

import { TaskController } from './controller'

const router = Router()

const controller = new TaskController();

router.post('/tasks', controller.create)

router.get("/tasks", controller.list);

router.get("/tasks/:taskId", controller.get);

router.put("/task/:taskId", controller.update);

router.delete("/task/:taskId", controller.remove);

export default router;