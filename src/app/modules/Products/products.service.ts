import { TProduct } from "./products.interface";
import { Products } from "./products.model"

const uploadProductsToDB = async (payload: TProduct) => {
    const result = await Products.create(payload);
    return result;
}

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
    let searchTerm = '';
    // const result = await Products.find();

    if (query.searchTerm) {
        searchTerm = query.searchTerm as string;
    }

    const searchableFields = ['name', 'description', 'productDescription']

    // step 1 : partial text search on searchable fields
    const searchQuery = Products.find({
        $or: searchableFields.map((field) => ({
            [field]: { $regex: searchTerm, $options: 'i' }
        }))
    });

    // step 2: filtering with queries. It should be exact match. the previously done searchField will not be needed. Hence we will delete it.
    const excludeFields = ['searchTerm', 'sort'];

    const queryObj = { ...query };

    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    excludeFields.forEach((el) => delete queryObj[el])

    const queryCopySecond = { ...queryObj };

    // the following if else block is to chain the price range query
    if (queryCopySecond.price) {
        delete queryCopySecond.price
        const filterQuery = searchQuery.find(queryCopySecond)
        const filterByPriceRange = await filterQuery.find({ price: { $lte: queryObj.price } })
        return filterByPriceRange;
    } else {
        const filterQuery = searchQuery.find(queryCopySecond);
        let sort = 'price';
        if (query.sort) {
            sort = query.sort as string;
        }
        const sortQuery = await filterQuery.sort(sort)
        return sortQuery;
    }

    // extra layer of filtering for price field
}

const getSingleProductFromDB = async (_id: string) => {
    const result = await Products.findById(_id);
    return result;
}

const updateProductToDB = async (id: string, payload: Partial<TProduct>) => {
    const result = await Products.findByIdAndUpdate({ _id: id }, payload, { new: true });
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
    deleteProductFromDB,
    updateProductToDB
}