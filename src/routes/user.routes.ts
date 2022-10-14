import { Router } from "express";

const routes = Router()

import userCreateController from "../controllers/user/userCreate.controller";
import userListController from "../controllers/user/userList.controller"
import userListOneController from "../controllers/user/userListOne.controller"
import userLoginController from "../controllers/user/userLogin.controller"

routes.post('/users', userCreateController)
routes.post('/users/login', userLoginController)
routes.get('/users', userListController)
routes.get('/users/me', userListOneController)


export default routes