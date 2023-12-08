import {Router} from 'express'

import { TaskController } from './controller'

const router = Router()

const controller = new TaskController();

router.post('/users', controller.create)

router.get("/users", controller.list);

router.get("/user/:userID", controller.get);

router.put("/user/:userID", controller.update);

router.delete("/user/:userID", controller.remove);


export default router;