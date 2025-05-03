import z from "zod";

const staffSchema = z.object({
    staffId: z.number().min(1).max(999)
});

const patientSchema = z.object({
  patientId: z.number().min(1).max(999),
  staffId: z.number().min(1).max(999)
});

export default function validateSignIn(method:'staff'| 'patient', body: object) {
  const result = (method === 'staff') ? staffSchema.safeParse(body) : patientSchema.safeParse(body)
  if (!result.success)
    return {
      success: false,
      message: result.error.issues[0].message,
      field: result.error.issues[0].path.join("."),
    };
  return { success: true, body: result.data };
}