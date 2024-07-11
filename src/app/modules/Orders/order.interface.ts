import { Types } from "mongoose";

export interface TOrder {
    // _id?: Types.ObjectId;
    customerName: string;
    email: string;
    phone: string;
    deliveryAddress: string;
    product: Types.ObjectId[];
}