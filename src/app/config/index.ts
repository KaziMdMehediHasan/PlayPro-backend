import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT,
    db_url: process.env.DB_URL,
    stripe_key: process.env.STRIPE_KEY
}