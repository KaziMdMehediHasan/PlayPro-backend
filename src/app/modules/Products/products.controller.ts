import { NextFunction, Request, Response } from "express";
import { ProductServices } from "./products.service";
import { ProductValidation } from "./products.validation";
import sendResponse from "../../utils/SendResponse";

const uploadProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const validatedProductData = ProductValidation.ProductValidationSchema.parse(req.body);
        const result = await ProductServices.uploadProductsToDB(validatedProductData);
        sendResponse(result, res, 'Product uploaded successfully');
    } catch (error) {
        next(error);
    }
}

const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.query);
    try {
        const result = await ProductServices.getAllProductsFromDB(req.query);
        sendResponse(result, res, 'Products fetched successfully');
    } catch (error) {
        next(error);
    }
}

const getSingleProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await ProductServices.getSingleProductFromDB(req.params.productId);
        sendResponse(result, res, 'Successfully found the product');
    } catch (error) {
        next(error);
    }
}

const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await ProductServices.deleteProductFromDB(req.params.productId);
        sendResponse(result, res, 'Product deleted successfully');
    } catch (err) {
        next(err);
    }

}

export const ProductControllers = {
    uploadProduct,
    getAllProducts,
    getSingleProduct,
    deleteProduct,
}

