import z from 'zod'

const schema = z.object({
    fullName: z.string(),
    address: z.string(),
    contactNumber: z.string().optional(),
    emailAddress: z.string().optional(),
    image: z.string().regex(/^[A-Za-z0-9+/=]+$/, {
        message: "Invalid base64 string",
      }).optional(),
    chronicDiagnoses: z.string().optional(),
    drId: z.number()
}).refine(
    (data) => data.emailAddress || data.contactNumber,
    {
        message: 'either an email address or contact number must be given',
        path: ['contactNumber']
    }
)

export default function validateUser(body: unknown){
    const result = schema.safeParse(body)
    if(!result.success) return {success: false, message: result.error.issues[0].message, field: result.error.issues[0].path.join('.') }
    return {success: true, body: result.data}
}