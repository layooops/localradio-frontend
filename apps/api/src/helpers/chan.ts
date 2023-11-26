import { chunk } from 'lodash';

export const chan = (arr: any[], number: number): any[] => {
  if (arr.length > 0) {
    return [arr.slice(0, number), ...chunk(arr.slice(number), number)];
  }
  return [];
};
