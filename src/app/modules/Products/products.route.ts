import express from 'express';
import { ProductControllers } from './products.controller';

const router = express.Router();

router.post('/product', ProductControllers.uploadProduct);
router.get('/products', ProductControllers.getAllProducts);
router.get('/products/:productId', ProductControllers.getSingleProduct);
router.delete('/products/:productId', ProductControllers.deleteProduct);

export const ProductRoutes = router;