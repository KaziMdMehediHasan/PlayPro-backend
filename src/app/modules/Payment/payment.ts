import Stripe from "stripe";
import config from "../../config";
import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/SendResponse";

const stripe = new Stripe(config.stripe_key as string);

const stripePayment = async (req: Request, res: Response, next: NextFunction) => {
    const { amount, token } = req.body;
    try {
        const charge = await stripe.charges.create({
            amount,
            currency: 'usd',
            description: 'Sample charge',
            source: token?.id
        });
        sendResponse(charge, res, 'Payment successful');
    } catch (error) {
        next(error);
    }
}

export default stripePayment