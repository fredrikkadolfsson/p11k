import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import { getUID } from '../utils/user';
import { createToken } from '../utils/token';
import { Error } from '../typings';

const authenticateUser = async ({ email, password }: { email: string; password: string }): Promise<string | Error> => {
  try {
    const uid = await getUID(email, password);
    return createToken({ uid });
  } catch (error) {
    console.log(error);
    return { code: HttpStatus.UNAUTHORIZED, info: 'Wrong or missing credentials' };
  }
};

const authenticateUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    let ret = await Promise.all(req.body.map(authenticateUser));
    res.send(ret);
    return;
  } catch (error) {
    console.log(error);
    res.status(HttpStatus.BAD_REQUEST);
    res.send('Something went wrong authenticating accounts');
    return;
  }
};

export default authenticateUsers;
