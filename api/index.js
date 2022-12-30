import express from 'express';
import * as dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRouter from "./routes/auth.js";

const app = express();
dotenv.config();

app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to database'))
    .catch((err) => console.log(err));

app
    .get('/', (req, res) => {
        res.send('Welcome to Express!');
    })
    .use('/api/auth', authRouter);

app.listen(4000, 'localhost', () => {
    console.log('Listening on http://localhost:4000');
})