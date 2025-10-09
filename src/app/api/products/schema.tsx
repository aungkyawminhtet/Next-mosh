import z from "zod";

const productSchema = z.object({
    name: z.string().min(1),
    price: z.number().min(1).max(100000),
});

export default productSchema;