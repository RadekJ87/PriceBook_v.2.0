import express from 'express';
import * as dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRouter from "./routes/auth.js";
import productRouter from "./routes/products.js";
import adminRouter from "./routes/admin.js";
import {createFakeData} from "./utilities/fakeData.js";

const app = express();
dotenv.config();

app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL)
    .then((res) => console.log('Connected to Mongo database ->', res.connections[0].name))
    .catch((err) => console.log(err));

app
    .get('/', (req, res) => {
        res.send('Welcome to Pricebook app!');
    })
    .get('/test', createFakeData )
    .use('/api/auth', authRouter)
    .use('/api/products', productRouter)
    // .use('/api/users', usersRouter);
    .use('/api/options', adminRouter);

app.listen(4000, 'localhost', () => {
    console.log('Listening on http://localhost:4000');
})