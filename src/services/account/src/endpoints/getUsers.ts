import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import { verifyToken } from '../utils/token';
import Account, { AccountExternal } from '../utils/db/models/account';
import { Error } from '../typings';

const getUser = async (jwt: string): Promise<AccountExternal | Error> => {
  if (!jwt) {
    return { code: HttpStatus.BAD_REQUEST, info: 'missing authorization header' };
  }

  try {
    const { uid } = verifyToken(jwt);
    const account = await Account.findOne({ _id: uid });
    if (!account) {
      return { code: HttpStatus.BAD_REQUEST, info: 'no account associated with given header' };
    }

    return account.toClient();
  } catch (error) {
    console.log(error);
    return { code: HttpStatus.BAD_REQUEST, info: 'Something whent wrong fetching the account' };
  }
};

const getUsers = async (req: Request, res: Response): Promise<void> => {
  const tokens: unknown = req.query?.tokens;

  if (!Array.isArray(tokens)) {
    res.status(HttpStatus.BAD_REQUEST);
    res.send('Tokens not provided or not an array');
    return;
  }

  try {
    const ret = await Promise.all(tokens.map(getUser));
    res.send(ret);
    return;
  } catch (error) {
    console.log(error);
    res.status(HttpStatus.BAD_REQUEST);
    res.send('Something went wrong fetching accounts');
    return;
  }
};

export default getUsers;
