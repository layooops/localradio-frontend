import { Maybe } from 'yup';
import {
  MixEntity,
  MixEntityResponseCollection,
} from '@/shared/api/graphql/__generated__/schema.graphql';
import { Description } from '@/shared/lib/types/description.interface';

export interface MixDescription {
  mix?: Description;
  guest?: Description;
  show?: Description;
}

export interface MixSibling {
  attributes?: Maybe<{ slug?: Maybe<string> }>;
}

export interface MixPageProps {
  mixes?: Pick<MixEntityResponseCollection, 'data'>;
  moreEpisodes?: MixEntity[];
  totalCount?: number;
  description?: MixDescription;
  tracklist?: Description;
  mixNext?: MixSibling[];
  mixPrev?: MixSibling[];
}
