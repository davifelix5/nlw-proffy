import { Request, Response } from 'express'

import db from '../database/connection'
import hourToMinutes from '../utils/hourToMinutes'

interface ClassSchedule {
    weekday: number,
    from: string,
    to: string,
}

class ClassesController {
    async create(req: Request, res: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            price,
            schedule
        } = req.body

        const trx = await db.transaction()

        try {
            const usersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            })

            const [user_id] = usersIds

            const classesIds = await trx('classes').insert({
                user_id,
                subject,
                price,
            })

            const [class_id] = classesIds

            const classSchedule = schedule.map((item: ClassSchedule) => {
                return {
                    class_id,
                    weekday: item.weekday,
                    from: hourToMinutes(item.from),
                    to: hourToMinutes(item.to)
                }
            })

            await trx('class_schedule').insert(classSchedule)

            await trx.commit()
            return res.status(201).json({ message: 'success' })

        } catch (err) {
            await trx.rollback()
            return res.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }
    }
}

export default ClassesController