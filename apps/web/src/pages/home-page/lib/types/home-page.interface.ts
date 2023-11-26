import type { Maybe } from 'yup';
import type { ScheduleQuery } from '@/entities/schedule/api';
import type { HomePageRandomMixQuery } from '../../api/home-page-random-mix.graphql.interface';
import type { HomepageQuery } from '../../api/home-page.graphql.interface';

export interface HomePageProps extends HomepageQuery {
  homePageRandomMix?: HomePageRandomMixQuery['homePageRandomMix'];
  schedules?: ScheduleQuery['eventSchedulesFixed'];
  streamIsLive?: Maybe<boolean>;
  error?: boolean;
}
