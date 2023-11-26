import type { EventDate } from './EventDate';
import type { EventInfo } from './EventInfo';
import type { Location } from './Location';

export interface Event {
  id: number;
  eventDate?: EventDate;
  schedule: EventInfo[];
  location?: Location;
  info?: string;
}
