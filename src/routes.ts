import { Router } from "express";

import authRoutes from '@app/Auth/routes'

const routes = Router()

routes.use(authRoutes)

export default routes