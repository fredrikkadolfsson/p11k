import { Request, Response } from 'express';
import Account from '../utils/db/models/account';
import { createToken } from '../utils/token';

const createUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password, passwordConfirm }: { email: string; password: string; passwordConfirm: string } = req.body;

  if (!email || !password || !passwordConfirm) {
    res.status(400);
    res.send('Missing parameter(s)');
    return;
  }

  if (password !== passwordConfirm) {
    res.status(400);
    res.send('passwordConfirm dose not equal password');
    return;
  }

  try {
    const newAccount = await Account.create({ email, password });
    const token = createToken({ uid: newAccount._id });

    res.send({ id: newAccount._id, email: newAccount.email, token });
    return;
  } catch {
    res.status(400);
    res.send('Account with same email already exists');
    return;
  }
};

export default createUser;
