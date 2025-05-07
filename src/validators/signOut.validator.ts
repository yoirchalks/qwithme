import z from "zod";

const schema = z.object({
  staffId: z.number().min(1).max(999),
  socketId: z.string(),
});

export default function validateSignOut(body: object) {
  const result = schema.safeParse(body);
  if (!result.success)
    return {
      success: false,
      message: result.error.issues[0].message,
      field: result.error.issues[0].path.join("."),
    };
  return { success: true, body: result.data };
}
