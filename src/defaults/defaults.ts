import {
  MixEntityResponseCollection,
  ReleaseEntityResponseCollection,
} from '@/shared/api/graphql/__generated__/schema.graphql';
import { Description } from '@/shared/lib/types/description.interface';
import defaultAboutJson from './default-about.json';
import defaultMixesJson from './default-mixes.json';
import defaultReleasesJson from './default-releases.json';

const stringifyJson = <T>(json: any): T => JSON.parse(JSON.stringify(json));

export const defaultMixes =
  stringifyJson<MixEntityResponseCollection>(defaultMixesJson);
export const defaultAbout = stringifyJson<Description>(defaultAboutJson);
export const defaultReleases =
  stringifyJson<ReleaseEntityResponseCollection>(defaultReleasesJson);
