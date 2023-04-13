const express = require('express');
var cors = require('cors');
const phones = require('./phones.json');

const app = express()
const port = 3000

app.use(cors());

app.get('/', (req, res) => {
  res.send('My Phones Information Coming Soon Toon!!!')
})

app.get('/phones',(req, res) =>{
 res.send(phones);
})

app.get('/phones/:id',(req, res) =>{

  const id = parseInt(req.params.id);
  
  const phone = phones.find(phone => phone.id === id) || {};
  console.log("Phone Id  eeee: " ,id,phone );
  res.send(phone);
 })

app.listen(port, () => {
  console.log(`My Phone Server is Running From Port soontoon ${port}`)
})