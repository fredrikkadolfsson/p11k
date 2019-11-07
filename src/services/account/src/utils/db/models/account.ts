import mongoose, { Document, Schema } from 'mongoose';

type AccountType = Document & {
  email: string;
  password: string;
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

const Account = mongoose.model<AccountType>('User', AccountSchema);

export default Account;
