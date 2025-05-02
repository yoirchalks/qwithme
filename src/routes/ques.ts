import express, { Request, Response } from "express";
import { prisma } from "../db/prisma";
import { isInteger } from "lodash";

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
    
})

router.post('/', async(req: Request, res: Response)=>{
    
})

export default router;