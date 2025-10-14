import z from "zod";

export const userSchema = z.object({
    // id: z.number(),
    name: z.string().min(1),
    email: z.string().min(1),
});


export const registerSchema = z.object({
    name: z.string().min(1),
    email : z.string().min(1),
    password: z.string()
})