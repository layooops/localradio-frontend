import type { HomepageQuery } from '../../api/home-page.graphql.interface';
import type { HomePageRandomMixQuery } from '../../api/home-page-random-mix.graphql.interface';
import type { ScheduleQuery } from '@/entities/schedule/api';
import type { Maybe } from 'yup';

export interface HomePageProps extends HomepageQuery {
  homePageRandomMix?: HomePageRandomMixQuery['homePageRandomMix'];
  schedules?: ScheduleQuery['eventSchedulesFixed'];
  streamIsLive?: Maybe<boolean>;
  error?: boolean;
}
