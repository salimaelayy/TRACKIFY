const express = require('express')
const app = express()
require('./connection')
const cookieParser= require('cookie-parser')
const cors=require('cors')

const userRoutes = require('./Routes/userRoute');
const authRoutes = require('./Routes/AuthRoutes');
const expenseRoutes = require('./Routes/expenseRoute');
const incomeRoutes = require('./Routes/incomeRoute');
const categoryRoutes = require('./Routes/categoryRoute');

// const { CloudinaryStorage } = require('multer-storage-cloudinary');

require('dotenv').config()
app.use(express.json())
app.use(cookieParser()) 
app.use(cors("*"));

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/expense', expenseRoutes);
app.use('/api/income', incomeRoutes);
app.use('/api/categories', categoryRoutes);

app.listen(process.env.PORT, () => {
    console.log('listening on port:' + process.env.PORT)
  })
  