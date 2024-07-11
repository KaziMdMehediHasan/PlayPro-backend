import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

const OrderSchema = new Schema<TOrder>({
    // _id: {
    //     type: Schema.Types.ObjectId,
    // },
    customerName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    deliveryAddress: {
        type: String,
        required: true
    },
    product: [{
        type: Schema.Types.ObjectId,
        ref: 'Products'
    }]
}, { versionKey: false })

export const Orders = model<TOrder>('Orders', OrderSchema);