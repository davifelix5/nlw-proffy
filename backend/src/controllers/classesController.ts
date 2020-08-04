import { Request, Response } from 'express'

import db from '../database/connection'
import hoursToMinutes from '../utils/hoursToMinutes'

interface ClassSchedule {
    weekday: number,
    from: string,
    to: string,
}

class ClassesController {

    async index(req: Request, res: Response) {
        const filters = req.query
        const subject = filters.subject as string
        const weekday = filters.weekday as string
        const time = filters.time as string

        if (!filters.weekday || !filters.subject || !filters.time) {
            return res.status(400).json({
                error: 'Filter information missing'
            })
        }

        const timeInMinutes = hoursToMinutes(time)

        const classesList = await db('classes')
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .join('class_schedule', 'class_schedule.class_id', '=', 'classes.id')
            .where('class_schedule.weekday', '=', Number(weekday))
            .andWhere('class_schedule.from', '<=', timeInMinutes)
            .andWhere('class_schedule.to', '>', timeInMinutes)
            .select('classes.*', 'users.*')

        return res.json(classesList)

    }

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
                    from: hoursToMinutes(item.from),
                    to: hoursToMinutes(item.to)
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