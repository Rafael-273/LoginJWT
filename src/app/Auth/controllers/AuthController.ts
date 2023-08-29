import {Request, Response } from 'express'

import AuthService from '@app/Auth/services/AuthService'
import AuthError from '@app/Auth/exceptions/AuthError'

class AuthController {
    async create(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body

        try {
            const { user, token } = await new AuthService().signIn(email, password)

            return res.status(200).json({ user, token })
        } catch(error) {
            if(error instanceof AuthError) return res.status(401).send()

            return res.status(500).json({ error})
        }

        return res.status(200).json({ message: 'Hello World'})
    }

    async destroy() {}
}

export default new AuthController()