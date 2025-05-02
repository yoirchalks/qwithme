import z from "zod";
const postSchema = z.object({
    patientId: z.number().min(0).max(999999),
    staffId: z.number().min(0).max(999999),
    roomId: z.number().min(0).max(999999) 
});

const putSchema = z.object({
  status: z.enum([
    'waiting',
    'being seen',
    'done',
    'cancelled'
  ])
});

export default function validateQue(method:'post'| 'put', body: object) {
  const result = (method === 'post') ? postSchema.safeParse(body) : putSchema.safeParse(body)
  if (!result.success)
    return {
      success: false,
      message: result.error.issues[0].message,
      field: result.error.issues[0].path.join("."),
    };
  return { success: true, body: result.data };
}