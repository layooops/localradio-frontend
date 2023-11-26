import type { Maybe } from 'yup';
import type { GenreEntity } from '@/shared/api/graphql/__generated__/schema.graphql';

export interface SecondHeader {
  slug: Maybe<string>;
  text: Maybe<string>;
  variant: 'shows' | 'residents' | 'resident' | 'genres';
  genres?: Maybe<GenreEntity[]>;
}
