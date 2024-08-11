const express = require('express');
const {carts} = require('./data.js');
const cors = require("cors");
const app = express();
<<<<<<< HEAD
const port = 3000 || process.env.PORT
   
app.use(cors());
=======
const carts = require('./data.js');
const cors = require("cors");


const port = process.env.PORT
>>>>>>> 24f8cd5a9f30be95e8ecc065b404f7eeedbcb400

app.use(cors());

app.get('/', (req,res) => {
<<<<<<< HEAD
    res.send("<h1>WELCOME TO HOME PAGE </h1>")
})
app.get('/user', (req,res) => {
    res.send(carts)
=======
    res.send(carts.carts)
>>>>>>> 24f8cd5a9f30be95e8ecc065b404f7eeedbcb400
})

app.get('/user/:id', (req,res) => {
    
    const id = Number(req.params.id)

    const user = carts.find((user) => user.id === id )

    res.send(user)

})

app.listen(port , () =>{
    console.log(`SERVER STARTED ON PORT NO ${port}`);
})