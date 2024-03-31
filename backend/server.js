const express = require('express')
// const cookieParser= require('cookie-parser')
// const cors=require('cors')
const app = express()

app.use(express.json())
require('dotenv').config()
require('./connection')


app.listen(process.env.PORT, () => {
    console.log('listening on port:' + process.env.PORT)
  })
  