import type { GenreEntity } from '@/shared/api/graphql/__generated__/schema.graphql';
import type { Maybe } from 'yup';

export interface SecondHeader {
  slug: Maybe<string>;
  text: Maybe<string>;
  variant: 'shows' | 'residents' | 'resident' | 'genres';
  genres?: Maybe<GenreEntity[]>;
}
