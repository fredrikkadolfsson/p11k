import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import { getUID } from '../utils/user';
import { createToken } from '../utils/token';

const authenticateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password }: { email: string; password: string } = req.body;
    const uid = await getUID(email, password);
    const token = createToken({ uid });

    res.send(token);
    return;
  } catch (error) {
    console.log(error);
    res.status(HttpStatus.UNAUTHORIZED);
    res.send('Wrong or missing credentials');
    return;
  }
};

export default authenticateUser;
