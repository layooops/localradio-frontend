import type { Maybe } from 'yup';
import { Description } from '../types/description.interface';

export const getDescription = (
  data?: Maybe<Description> | Maybe<string>
): string => {
  if (typeof data === 'string') return data;
  if (typeof data === 'object')
    return (
      data?.descriptionEn ?? data?.descriptionRu ?? data?.description ?? ''
    );
  return '';
};
