const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      // Establish the MongoDB connection
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // Additional options if needed
      });
  
      console.log('MongoDB connected!');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      process.exit(1); // Exit the process with a failure code
    }
  };
  

  module.exports = connectDB;