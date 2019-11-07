import fs from 'fs';
import jwt from 'jsonwebtoken';
import config from '../config';

const privateKey = fs.readFileSync('mock/SSL/private.key');

export const createToken = ({ uid }: { uid: string }): string =>
  jwt.sign(
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
