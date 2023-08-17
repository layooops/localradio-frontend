import type { GuestsQuery } from './guest/guest.graphql.interface';

import {
  GenreDocument,
  GenresDocument,
} from './genre/genres.graphql.interface';
import { GuestsDocument } from './guest/guest.graphql.interface';
import { MoodDocument, MoodsDocument } from './mood/mood.graphql.interface';
import { ShowsDocument } from './show/shows.graphql.interface';

export const MixArchiveInnerApiDocuments = {
  GuestsDocument,
  ShowsDocument,
  GenresDocument,
  GenreDocument,
  MoodDocument,
  MoodsDocument,
};

export const MixArchiveInnerApi = Object.assign(MixArchiveInnerApiDocuments);
export type { GuestsQuery };
