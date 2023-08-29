import { Router } from "express";

import authMiddleware from "@app/Auth/middlewares/AuthMiddleware";

import users from "@app/Users/controllers/UsersController";

const routes = Router()

routes.get('/users', authMiddleware, users.index)

export default routes