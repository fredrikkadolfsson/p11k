import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import { verifyToken } from '../utils/token';
import Account from '../utils/db/models/account';

const getUser = async (req: Request, res: Response): Promise<void> => {
  const jwt = req.header('authorization');

  if (!jwt) {
    res.status(HttpStatus.BAD_REQUEST);
    res.send('missing authorization header');
    return;
  }

  try {
    const { uid } = verifyToken(jwt);
    const account = await Account.findOne({ _id: uid });
    if (!account) {
      res.status(HttpStatus.BAD_REQUEST);
      res.send('no account associated with given header');
      return;
    }

    res.json(account.toClient());
    return;
  } catch (error) {
    console.log(error);
    res.status(HttpStatus.BAD_REQUEST);
    res.send('Something whent wrong fetching the account');
    return;
  }
};

export default getUser;
