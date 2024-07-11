/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import { Response } from "express";

const sendResponse = (result: any, res: Response, message: string) => {
    return res.status(httpStatus.OK).json({
        success: true,
        statusCode: httpStatus.OK,
        message: message,
        data: result
    })
}

export default sendResponse;