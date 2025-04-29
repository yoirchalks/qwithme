import express, {Request, Response} from 'express'
import { prisma } from '../db/prisma'

const router = express.Router()

router.get('/', async(req: Request, res: Response)=>{
    const result = await prisma.patients.findMany()
    res.send(result)
})

export default router