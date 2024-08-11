const express = require('express');
const {carts} = require('./data.js');
const cors = require("cors");
const app = express();

const port = 3000 || process.env.PORT
   
app.use(cors());

app.get('/', (req,res) => {

    res.send("<h1>WELCOME TO HOME PAGE </h1>")
})

app.get('/user', (req,res) => {
    res.send(carts)

})

app.get('/user/:id', (req,res) => {
    
    const id = Number(req.params.id)

    const user = carts.find((user) => user.id === id )

    res.send(user)

})

app.listen(port , () =>{
    console.log(`SERVER STARTED ON PORT NO ${port}`);
})