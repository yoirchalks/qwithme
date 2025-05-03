import { prisma } from "../db/prisma";
import { CustomError } from "./CustomError";

export default async function (staffId: number, patientId: number) {
    const patient = await prisma.patients.findUnique({
        where:{
            id: patientId
        }
    })

    if(!patient) throw new CustomError(404, `patient with id ${patientId} not found`)
    
    const staff = await prisma.staff.findUnique({
        where:{
            id: staffId
        }
    })

    if(!staff){ throw new CustomError(404, `staff with id ${patientId} not found`)}
    const roomId = await prisma.staff_rooms.findFirst({
        where:{
            staff_id: staffId
        },
        select:{
            room_id: true
        }
    })

    if(!roomId) throw new CustomError(404, `no room allocated to staff with id ${staffId}`) 
    
    const queNumber = await prisma.ques.count()

    const que = await prisma.ques.create({
        data:{
            patient_id: patientId,
            staff_id: staffId,
            room_id: roomId.room_id,
            queue_number: queNumber
        }
    })

    return que
}