import { Error } from '../typings';

export const isError = (toBeDetermined: unknown | Error): toBeDetermined is Error => {
  if ((toBeDetermined as Error).code) {
    return true;
  }
  return false;
};
