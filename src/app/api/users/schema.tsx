import z from "zod";

export const userSchema = z.object({
    id: z.string(),
    name: z.string().min(1),
    email: z.string().min(1),
    age: z.string().min(1),
})