const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('My Phones Information Coming Soon Toon!!!')
})

app.listen(port, () => {
  console.log(`My Phone Server is Running From Port soontoon ${port}`)
})