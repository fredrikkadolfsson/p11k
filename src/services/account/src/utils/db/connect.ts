import mongoose from 'mongoose';
import config from '../../config';

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(`mongodb://mongo:27017`, {
      dbName: config.DB_NAME,
      pass: config.DB_PASSWORD,
      useCreateIndex: true,
      useNewUrlParser: true,
      user: config.DB_USER,
      useUnifiedTopology: true,
    });
    console.log('Connection to database has been established successfully.');
  } catch (error) {
    console.error('Connection to database failed!', error);
  }
};

export default connectDB;
