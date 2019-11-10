import fs from 'fs';
import jwt from 'jsonwebtoken';
import config from '../config';

const publicKey = fs.readFileSync('mock/SSL/public.key');
const privateKey = fs.readFileSync('mock/SSL/private.key');

type jwtType = {
  uid: string;
};

const jwtOptions = {
  algorithm: config.JWT_ALGORITHM,
  audience: config.JWT_AUDIENCE,
  expiresIn: config.JWT_EXPIRES_IN,
  issuer: config.JWT_ISSUER,
  subject: config.JWT_SUBJECT,
};

export const createToken = ({ uid }: jwtType): string =>
  jwt.sign(
    {
      uid,
    },
    privateKey,
    jwtOptions,
  );

export const verifyToken = (token: string): jwtType => jwt.verify(token, publicKey, jwtOptions) as jwtType;
