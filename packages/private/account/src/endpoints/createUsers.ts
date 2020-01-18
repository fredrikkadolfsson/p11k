import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import Account, { AccountExternal } from '../utils/db/models/account';
import { createToken } from '../utils/token';
import { Error } from '../typings';

const createUser = async ({
  email,
  password,
  passwordConfirm,
}: {
  email: string;
  password: string;
  passwordConfirm: string;
}): Promise<AccountExternal | Error> => {
  if (email === '' || password === '' || passwordConfirm === '') {
    return { code: HttpStatus.BAD_REQUEST, info: 'Missing parameter(s)' };
  }

  if (password !== passwordConfirm) {
    return { code: HttpStatus.BAD_REQUEST, info: 'passwordConfirm dose not equal password' };
  }

  try {
    const newAccount = await Account.create({ email, password });
    const token = createToken({ uid: newAccount._id });

    return { id: newAccount._id, email: newAccount.email, token };
  } catch (error) {
    console.log(error);
    return { code: HttpStatus.INTERNAL_SERVER_ERROR, info: 'Account already exists or something went wrong' };
  }
};

const createUsers = async (req: Request, res: Response): Promise<void> => {
  const body: unknown = req.body;

  if (!Array.isArray(body)) {
    res.status(HttpStatus.BAD_REQUEST);
    res.send('User inforamtion not provided in correct format');
    return;
  }

  try {
    const ret = await Promise.all(body.map(createUser));
    res.send(ret);
    return;
  } catch (error) {
    console.log(error);
    res.status(HttpStatus.BAD_REQUEST);
    res.send('Something went wrong creating accounts');
    return;
  }
};

export default createUsers;
