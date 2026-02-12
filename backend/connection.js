require('dotenv').config()
const mongoose = require('mongoose')

// Connect to the database

/* Connects to the database specified in the .env file.
 * This function uses the URI environment variable to connect to the database.
 * If the connection is successful, it logs a success message to the console.
 * If the connection fails, it logs an error message to the console.
 */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Connection to the database was successful, log a success message
    console.log('Connected to the database')
  })
  .catch((err) => {
    // Connection to the database failed, log an error message
    console.log('Not connected to the database ' + err)
  })


