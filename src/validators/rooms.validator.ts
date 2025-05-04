import z from "zod";

const schema = z.object({
  roomType: z.enum([
    "examination",
    "daySurgery",
    "nurses",
    "preparation",
    "physio",
    "cardio",
    "emergency",
    "dental",
  ]),
  roomNumber: z.string().min(2).max(7)
});

export default function validateRoom(body: object) {
  const result = schema.safeParse(body);
  if (!result.success)
    return {
      success: false,
      message: result.error.issues[0].message,
      field: result.error.issues[0].path.join("."),
    };
  return { success: true, body: result.data };
}
