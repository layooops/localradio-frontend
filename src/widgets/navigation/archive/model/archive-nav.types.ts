import type { ArchiveNavigationQuery } from '../api/navigation.graphql.interface';

export interface ArchiveNav {
  moods: ArchiveNavigationQuery['moodsArray'];
  genres: ArchiveNavigationQuery['genresArray'];
}
