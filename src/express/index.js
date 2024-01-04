const express = require('express')
const app = express()
const port = 5000
const conectMongo = require("./db")
conectMongo()
app.get('/', (req, res) => {
  res.send('Hello World! this is saba,s first backend project') 
})
app.use(express.json())
app.use('/api',require("./Routes/createUser"))
app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})