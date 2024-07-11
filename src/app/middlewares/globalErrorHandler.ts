import { ErrorRequestHandler } from "express";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    //* default error response
    const statusCode = 500;
    const message = err.message || 'Something went wrong';
    return res.status(statusCode).json({
        success: false,
        message: message,
    })
}

export default globalErrorHandler;