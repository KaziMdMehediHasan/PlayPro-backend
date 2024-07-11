import express from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import { ProductRoutes } from './app/modules/Products/products.route';
import { OrderRoutes } from './app/modules/Orders/order.route';
import stripePayment from './app/modules/Payment/payment';

const app = express();

// parsers
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('Welcome to assignment 4 server')
})

// user routes

app.use('/api/v1', ProductRoutes);
app.use('/api/v1/orders', OrderRoutes);

//payment route

app.post('https://api.stripe.com/v1/charges', stripePayment);
//global error handling middleware
app.use(globalErrorHandler);
// not found route handling
app.use(notFound);
export default app;