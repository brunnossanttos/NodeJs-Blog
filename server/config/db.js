const mongoose = require('mongoose')

const connectDb = async () => {
  try {
    mongoose.set('strictQuery', false)
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`Database connected successfully in host: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDb