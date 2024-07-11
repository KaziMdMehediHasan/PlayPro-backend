import mongoose, { Schema } from "mongoose";
import { TProduct } from "./products.interface";

const ProductSchema = new Schema<TProduct>({
    name: {
        type: "string",
        required: true,
    },
    // category: [
    //     {
    //         type: String, //^ this must be written like this. Using "string" instead of String throws type error.
    //         required: true,
    //     }
    // ],
    category: {
        type: "string",
        required: true,
    },
    stockQuantity: {
        type: "number",
        required: true,
    },
    brand: {
        type: "string",
        required: true,
    },
    description: {
        type: "string",
        default: "",
    },
    productDescription: {
        type: "string",
        required: true,
    },
    price: {
        type: "number",
        required: true,
    },
    image: {
        type: "string",
        default: "",
    },
    rating: {
        type: "number",
        default: 0
    },
    inStock: {
        type: "boolean",
        default: true
    }
}, { versionKey: false })

export const Products = mongoose.model<TProduct>('Products', ProductSchema)