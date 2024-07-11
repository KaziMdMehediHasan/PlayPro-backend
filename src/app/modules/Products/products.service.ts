import { TProduct } from "./products.interface";
import { Products } from "./products.model"

const uploadProductsToDB = async (payload: TProduct) => {
    const result = await Products.create(payload);
    return result;
}

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
    //{email: {$regex: query.name, $options:i}}
    let searchTerm = '';
    const searchableFields: string[] = ['name', 'description', 'productDescription'];
    if (query?.searchTerm) {
        searchTerm = query?.searchTerm as string;
    }
    const result = await Products.find({
        $or: searchableFields.map((field) => ({
            [field]: { $regex: searchTerm, $options: 'i' }
        }))
    });
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