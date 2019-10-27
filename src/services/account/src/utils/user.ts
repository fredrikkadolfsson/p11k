import Account from './db/models/account';

export const getUID = async (email: string, password: string): Promise<string> => {
  const account = await Account.findOne({ email, password });

  if (account === null) {
    throw new Error('Account does not exist');
  }

  return account._id;
};
