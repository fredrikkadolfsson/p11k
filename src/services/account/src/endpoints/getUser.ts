import { Response } from 'express';

const getUser = (_: unknown, res: Response): void => {
  res.json({ email: 'mockEmail', id: 'mockId' });
  return;
};

export default getUser;
