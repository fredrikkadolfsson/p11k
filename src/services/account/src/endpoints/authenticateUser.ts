import fs from 'fs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import { getUID } from '../utils/user';

const privateKey = fs.readFileSync('mock/SSL/private.key');

const authenticateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password }: { email: string; password: string } = req.body;
    const uid = await getUID(email, password);
    const token = jwt.sign(
      {
        uid,
      },
      privateKey,
      {
        algorithm: config.JWT_ALGORITHM,
        audience: config.JWT_AUDIENCE,
        expiresIn: config.JWT_EXPIRES_IN,
        issuer: config.JWT_ISSUER,
        subject: config.JWT_SUBJECT,
      },
    );

    res.send(token);
    return;
  } catch {
    res.status(401);
    res.send('Wrong or missing credentials');
    return;
  }
};

export default authenticateUser;
