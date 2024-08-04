require('dotenv').config()

const express = require('express');
const app = express();

const port = process.env.PORT

app.get('/', (req,res) => {
    res.send('Hello Alfaiz How are you')
})

app.get('/follow', (req,res) => {
     res.send('Alfaiz Chadiyata')
})

app.listen(port , () =>{
    console.log(`SERVER STARTED ON PORT NO ${port}`)
})
