import mongoose, { Document, Schema } from 'mongoose';

type AccountType = Document & {
  _id: string;
  email: string;
  password: string;
  toClient(): {
    email: string;
    id: string;
  };
};

const AccountSchema: Schema<AccountType> = new Schema({
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

AccountSchema.method('toClient', function(this: AccountType) {
  const obj = this.toObject();

  obj.id = obj._id;
  delete obj._id;

  return obj;
});

const Account = mongoose.model<AccountType>('User', AccountSchema);

export default Account;
