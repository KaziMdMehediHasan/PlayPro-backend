import { z } from "zod";

const ProductValidationSchema = z.object({
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }),
    // category: z.array(z.string({
    //     required_error: "Category is required",
    //     invalid_type_error: "Category must be an array of string",
    // })),
    category: z.string({
        required_error: "Category is required",
        invalid_type_error: "Category must be a string",
    }),
    stockQuantity: z.number({
        required_error: "Quantity is required",
        invalid_type_error: "Quantity must be a number",
    }).min(1),
    brand: z.string({
        required_error: "Brand is required",
        invalid_type_error: "Brand must be a string",
    }),
    description: z.string().optional(),
    productDescription: z.string({
        required_error: "Product description is required",
    }),
    price: z.number({
        required_error: "Quantity is required",
        invalid_type_error: "Quantity must be a positive number",
    }).positive(),
    image: z.string().optional(),
    rating: z.number().optional(),
    inStock: z.boolean().optional()
});

const UpdateProductValidationSchema = z.object({
    name: z.string({}).optional(),
    category: z.array(z.string({})).optional(),
    stockQuantity: z.number({}).min(1).optional(),
    brand: z.string({}).optional(),
    description: z.string().optional(),
    productDescription: z.string({}).optional(),
    price: z.number({}).positive().optional(),
    image: z.string().optional(),
    rating: z.number().optional(),
    inStock: z.boolean().optional(),
}).optional();

export const ProductValidation = {
    ProductValidationSchema,
    UpdateProductValidationSchema
}