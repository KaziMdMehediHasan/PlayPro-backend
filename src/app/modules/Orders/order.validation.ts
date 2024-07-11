import mongoose from "mongoose";
import { z } from "zod";

const OrderValidationSchema = z.object({
    // _id: z.custom<mongoose.Types.ObjectId>().optional(),
    customerName: z.string({
        required_error: 'User name must be provided',
        invalid_type_error: 'User name must be string'
    }).min(1).max(255),
    email: z.string({
        required_error: 'Email must be provided',
        invalid_type_error: 'Email must be provide with correct domain name, eg: example@gmail.com'
    }).email(),
    phone: z.string({
        required_error: 'Phone number must be provided',
    }),
    deliveryAddress: z.string({
        required_error: 'Delivery address must be provided'
    }).min(1),
    product: z.array(z.custom<mongoose.Types.ObjectId>())
});

export const OrderValidation = {
    OrderValidationSchema
}