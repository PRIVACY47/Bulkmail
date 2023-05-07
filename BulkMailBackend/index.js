const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config()
const app = express()

var cors = require('cors')
 
app.use(cors())



const port = 8000
const sendMailController = require('./mail')
const router = require('./Routes')
app.use(express.json())
app.use('/', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  mongoose.connect(process.env.MONGODB_URL).then(console.log("connected to backend"))
})