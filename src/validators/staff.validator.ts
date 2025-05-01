import z from "zod";

const stringToNum = z
  .string()
  .regex(/^\d+(\.\d{2})$/, { message: "Must have exactly two decimal places" })
  .transform((s) => parseFloat(s));

const postSchema = z.object({
  fullName: z.string(),
  position: z.enum([
    "doctor",
    "pa",
    "nurse",
    "secretary",
    "IT",
    "maintenance",
    "manager",
  ]),
  image: z
    .string()
    .regex(/^[A-Za-z0-9+/=]+$/, {
      message: "Invalid base64 string",
    })
    .optional(),
  yearsOfService: z.number().min(0).max(60),
  monthlyWages: z.pipeline(stringToNum, z.number().max(100000)),  
});

const putSchema = z.object({
  fullName: z.string().optional(),
  position: z.enum([
    "doctor",
    "pa",
    "nurse",
    "secretary",
    "IT",
    "maintenance",
    "manager",
  ]).optional(),
  image: z
    .string()
    .regex(/^[A-Za-z0-9+/=]+$/, {
      message: "Invalid base64 string",
    })
    .optional(),
  yearsOfService: z.number().min(0).max(60).optional(),
  monthlyWages: z.pipeline(stringToNum, z.number().max(100000)).optional(),  
});

export default function validateStaff(method:'post'| 'put', body: object) {
  const result = (method === 'post') ? postSchema.safeParse(body) : putSchema.safeParse(body)
  if (!result.success)
    return {
      success: false,
      message: result.error.issues[0].message,
      field: result.error.issues[0].path.join("."),
    };
  return { success: true, body: result.data };
}
