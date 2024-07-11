import { Products } from "../Products/products.model";
import { TOrder } from "./order.interface";
import { Orders } from "./order.model"

const createOrderToDB = async (payload: TOrder) => {
    // we need to find multiple product by their _id and update the same field of each document
    payload?.product?.forEach(async (productId) => await Products.findByIdAndUpdate(
        { _id: productId },
        { $inc: { stockQuantity: -1 } }
    ))
    const result = await Orders.create(payload);
    return result
}
const getOrdersFromDB = async () => {
    const result = await Orders.find().populate('product'); //* always write the name of the field where you have used reference of another model
    return result
}
const getSingleOrderFromDB = async (_id: string) => {
    const result = await Orders.findById(_id);
    return result
}

const deleteOrderFromDB = async (_id: string) => {
    const result = await Orders.findByIdAndDelete(_id);
    return result;
}

export const OrderService = {
    createOrderToDB,
    getOrdersFromDB,
    getSingleOrderFromDB,
    deleteOrderFromDB
}