import fs from 'fs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import { getUID } from '../utils/user';

const privateKey = fs.readFileSync('mock/SSL/private.key');

const authenticateUser = (req: Request, res: Response): void => {
  const { email, password } = req.body;
  const uid = getUID(email, password);

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
};

export default authenticateUser;
