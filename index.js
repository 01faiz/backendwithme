import express from 'express';
import {carts} from './data.js';

const app = express();
const port = 3000 || process.env.PORT
   


app.get('/', (req,res) => {
    res.send(carts)
})


app.get('/follow', (req,res) => {
     res.send("Alfaiz chadiyata")
})

app.listen(port , () =>{
    console.log(`SERVER STARTED ON PORT NO ${port}`);
})