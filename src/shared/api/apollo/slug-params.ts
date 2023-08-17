import type { ParsedUrlQuery } from 'querystring';

export interface SlugParams extends ParsedUrlQuery {
  slug: string;
}
