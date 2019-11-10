import { Request, Response } from 'express';
import { verifyToken } from '../utils/token';
import Account from '../utils/db/models/account';

const getUser = async (req: Request, res: Response): Promise<void> => {
  const jwt = req.header('authorization');

  if (!jwt) {
    res.status(400);
    res.send('missing authorization header');
    return;
  }

  try {
    const { uid } = verifyToken(jwt);
    const account = await Account.findOne({ _id: uid });
    if (!account) {
      res.status(400);
      res.send('no account associated with given header');
      return;
    }

    res.json(account.toClient());
    return;
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send('Something whent wrong fetching the account');
    return;
  }
};

export default getUser;
