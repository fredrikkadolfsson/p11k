import mongoose, { Document, Schema } from 'mongoose';

interface Account extends Document {
  _id: string;
  email: string;
  password: string;
  toClient(): {
    email: string;
    id: string;
  };
}

const AccountSchema: Schema<Account> = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

AccountSchema.method('toClient', function(this: Account) {
  const obj = this.toObject();

  obj.id = obj._id;
  delete obj._id;

  return obj;
});

export default mongoose.model<Account>('User', AccountSchema);
