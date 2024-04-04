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
app.use(cors({credentials :true,origin :'http://localhost:5173'}));
app.use(cors("*"));

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/expense', expenseRoutes);
app.use('/api/income', incomeRoutes);
app.use('/api/categories', categoryRoutes);

// cloudinary.config({
//   cloud_name: 'dpgarq5ka', 
//   api_key: '829945163361753', 
//   api_secret: 'T3cxDBdX7DtGPUp5dHcuswnIdng'
// });

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'profile_images',
//     format: async (req, file) => 'png', 
//     public_id: (req, file) => 'computed-filename-using-file',
//     allowedFormats: ['jpeg', 'png', 'jpg'],
//   },
// });



// const upload = multer({ storage: storage });

// app.post('/upload', upload.single('image'), (req, res) => {
//   res.json({ fileUrl: req.file.path });
// });

app.listen(process.env.PORT, () => {
    console.log('listening on port:' + process.env.PORT)
  })
  