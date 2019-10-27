import mongoose from 'mongoose';
import config from '../../config';

const connectDB = async (): Promise<void> => {
  await mongoose.connect(`mongodb://localhost:27017`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: config.DB_USER,
    pass: config.DB_PASSWORD,
    dbName: config.DB_NAME,
  });
  console.log('Connection to database has been established successfully.');
};

export default connectDB;
