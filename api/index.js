import express from 'express';
import * as dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRouter from "./routes/auth.js";
import productRouter from "./routes/products.js";
import optionsRouter from "./routes/options.js";
import {createFakeData} from "./utils/fakeData.js";
import cors from 'cors';


const app = express();
dotenv.config();

// added for testing other repo
const corsOptions = {
    origin: process.env.CLIENT_APP_URL
}

app.use(cors());
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
    .use('/api/options', optionsRouter);

app.listen(4000, 'localhost', () => {
    console.log('Listening on http://localhost:4000');
})