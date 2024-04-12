const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  country: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    default: 'https://res.cloudinary.com/dpgarq5ka/image/upload/v1712759256/ikxhlfl41pzeydreevok.png',
    required: false
  },
});

module.exports =  mongoose.model('User', userSchema);
