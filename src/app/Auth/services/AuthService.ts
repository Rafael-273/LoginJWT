import jwt from 'jsonwebtoken'

import AuthError from "@app/Auth/exceptions/AuthError"

import config from '@/config'

export default class AuthService {
    async signIn(email: string, password: string): Promise<{ user: object, token: string}> {
        const user = {
            id: '123',
            email: 'admin@admin.com',
            password: 'secret',
            fullName: 'Admin',
        }
        
        if(email !== user.email || password !== user.password ) {
            throw new AuthError('Invalid credentials')
        }

        const {id, fullName } = user
        
        const token = jwt.sign({ id }, config.auth.secret, {
            expiresIn: config.auth.expiresIn,
        })

        return {
            user: {
                id,
                fullName,
                email,
            },
            token,
        }
    }

    async validateToken(token: string): Promise<string> {
        try {
            const decoded = jwt.verify(token, config.auth.secret) as {
                id: string
            }

            return decoded.id
        } catch (err) {
            throw new AuthError('Invalid token')
        }
    }
}