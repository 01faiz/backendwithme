require('dotenv').config()

const express = require('express');
const app = express();
const carts = require('./data.js');


const port = process.env.PORT

app.get('/', (req,res) => {
    res.send(carts.carts)
})

app.get('/follow', (req,res) => {
     res.send('Alfaiz Chadiyata')
})

app.listen(port , () =>{
    console.log(`SERVER STARTED ON PORT NO ${port}`)
})
