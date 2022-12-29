import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Express!');
})

app.listen(4000, 'localhost', ()=>{
    console.log('Listening on http://localhost:4000');
})