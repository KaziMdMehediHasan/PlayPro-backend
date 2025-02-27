/* eslint-disable no-console */
import app from "./app"
import mongoose from "mongoose";
import config from "./app/config";

async function main() {
    try {
        await mongoose.connect(config.db_url as string);
        app.listen(config.port, () => {
            console.log(`Database connected and server is running on port ${config.port}`);
        });
    } catch (error) {
        console.log(error);
    }

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();