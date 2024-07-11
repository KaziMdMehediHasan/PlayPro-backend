import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router.post('/', OrderController.createOrder);
router.get('/', OrderController.getAllOrders);
router.delete('/:orderId', OrderController.deleteOrder);
router.get('/:orderId', OrderController.getSingleOrder);

export const OrderRoutes = router