import { NextFunction, Request, Response } from "express";
import { OrderValidation } from "./order.validation";
import { OrderService } from "./order.service";
import sendResponse from "../../utils/SendResponse";

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
    const validatedOrderData = OrderValidation.OrderValidationSchema.parse(req.body);
    try {
        const result = await OrderService.createOrderToDB(validatedOrderData);
        sendResponse(result, res, 'Order created successfully');
    } catch (error) {
        next(error);
    }
}

const getAllOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await OrderService.getOrdersFromDB();
        sendResponse(result, res, 'Orders retrieved successfully');
    } catch (error) {
        next(error);
    }
}

const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await OrderService.deleteOrderFromDB(req.params.orderId);
        sendResponse(result, res, 'Order deleted successfully');
    } catch (error) {
        next(error);
    }
}

const getSingleOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await OrderService.getSingleOrderFromDB(req.params.orderId);
        sendResponse(result, res, 'Order retrieved successfully');
    } catch (error) {
        next(error)
    }
}

export const OrderController = {
    createOrder,
    getAllOrders,
    deleteOrder,
    getSingleOrder
}