import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import Account from '../utils/db/models/account';
import { createToken } from '../utils/token';

const createUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password, passwordConfirm }: { email: string; password: string; passwordConfirm: string } = req.body;

  if (!email || !password || !passwordConfirm) {
    res.status(HttpStatus.BAD_REQUEST);
    res.send('Missing parameter(s)');
    return;
  }

  if (password !== passwordConfirm) {
    res.status(HttpStatus.BAD_REQUEST);
    res.send('passwordConfirm dose not equal password');
    return;
  }

  try {
    const newAccount = await Account.create({ email, password });
    const token = createToken({ uid: newAccount._id });

    res.send({ id: newAccount._id, email: newAccount.email, token });
    return;
  } catch (error) {
    console.log(error);
    res.status(HttpStatus.BAD_REQUEST);
    res.send('Account with same email already exists');
    return;
  }
};

export default createUser;
