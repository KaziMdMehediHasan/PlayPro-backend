import { TProduct } from "./products.interface";
import { Products } from "./products.model"

const uploadProductsToDB = async (payload: TProduct) => {
    const result = await Products.create(payload);
    return result;
}

const getAllProductsFromDB = async () => {
    const result = await Products.find();
    return result;
}

const getSingleProductFromDB = async (_id: string) => {
    const result = await Products.findById(_id);
    return result;
}

const deleteProductFromDB = async (_id: string) => {
    const result = await Products.findByIdAndDelete(_id);
    return result;
}

export const ProductServices = {
    uploadProductsToDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    deleteProductFromDB
}