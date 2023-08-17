import type { Description } from '../types/description.interface';
import type { Maybe } from 'yup';

export const getDescription = (
  data?: Maybe<Description> | Maybe<string>,
): string => {
  if (typeof data === 'string') return data;
  if (typeof data === 'object')
    return (
      data?.descriptionEn ?? data?.descriptionRu ?? data?.description ?? ''
    );
  return '';
};
