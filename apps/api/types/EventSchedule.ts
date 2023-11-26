import type { Location } from './components/Location';
import type { Schedule } from './components/Schedule';
import type { Media } from './Media';

export interface EventSchedule {
  id: number;
  attributes: {
    date: Date;
    location?: Location;
    schedule: Schedule[];
    cover?: { data: Media };
  };
}
