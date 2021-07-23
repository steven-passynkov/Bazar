const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 4321

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

const db = require('./queries')

app.get('/product', db.getProduct)
app.get('/product/:id', db.getProductById)
app.post('/product', db.createProduct)
app.put('/product/:id', db.updateProduct)
app.delete('/product/:id', db.deleteProduct)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
  