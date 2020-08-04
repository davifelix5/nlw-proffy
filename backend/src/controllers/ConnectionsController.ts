import { Request, Response } from 'express'

import db from '../database/connection'

class ConnectionsController {
    async index(req: Request, res: Response) {
        const totalConnections = await db('connections').count('* as total')
        const { total } = totalConnections[0]
        return res.json({ total })
    }

    async create(req: Request, res: Response) {
        const { user_id } = req.body
        try {
            await db('connections').insert({
                user_id
            })
            return res.status(201).send()
        } catch (err) {
            return res.status(401).json({
                error: 'Unexpected error while registering new connection'
            })
        }
    }
}

export default ConnectionsController
