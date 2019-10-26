import { Response } from 'express';

const getUser = (_: unknown, res: Response): void => {
  res.json({ firstName: 'mockFirstName', id: 'mockId', lastName: 'mockLastName' });
};

export default getUser;
