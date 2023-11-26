import type { Artist } from './Artist';

export interface Schedule {
  id: number;
  time?: Date;
  artist?: Artist;
}
