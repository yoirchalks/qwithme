import express, { Request, Response } from "express";
import { prisma } from "../db/prisma";
import { isInteger } from "lodash";
import validateQue from "../validators/ques.validator";
import { CustomError } from "../utils/CustomError";

const router = express.Router();

router.get('/', async(req: Request, res: Response)=>{
    
    const roomId = req.query.roomId as string || null 
    let cleanedRoomId;
    if(roomId && /^[1-9]\d*$/.test(roomId)){
        cleanedRoomId = parseInt(roomId)
    }
    else{
        res.status(400).send(`room id can only be an integer`)
        return
    }
    let results;
    if(cleanedRoomId){
        results = await prisma.ques.findMany({
            where: {
                room_id: cleanedRoomId
            }
        })
    }
    else{
        results = await prisma.ques.findMany()
    }

    res.send(results)
})

router.post('/', async(req: Request, res: Response)=>{
    
})

router.get('/:id', async(req: Request, res: Response)=>{
     const id = parseInt(req.params.id);
      const que = await prisma.ques.findUnique({
        where: {
          id: id,
        },
      });
    
      if (!que) {
        res.status(404).send(`no que found with id ${req.params.id}`);
        return;
      }
      res.send(que);
    
})

router.put('/:id', async(req: Request, res: Response)=>{
    const result = validateQue('post', req.body);
    if(!result.success) throw new CustomError(400, `${result.field} is ${result.message?.toLowerCase()}`)
    
    const {patientId, roomId, staffId} = req.body;

    const queNumber = prisma.ques
})

export default router;