import z from "zod";

const productSchema = z.object({
    id: z.string(),
    name: z.string().min(1),
    price: z.number().min(1).max(1000),
});

export default productSchema;