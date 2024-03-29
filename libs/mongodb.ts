import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('Connected to MongoDB');
    }
  } catch (error) {
    console.log('Error while conncting to MongoDB: ' + error);
  }
};

export default connectMongoDB;
