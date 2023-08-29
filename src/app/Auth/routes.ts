import { Router } from "express";

import auth from "@app/Auth/controllers/AuthController";

const routes = Router()

routes.post('/auth/sign-in', auth.create)

export default routes