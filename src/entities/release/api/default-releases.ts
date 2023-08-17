import type { ReleaseEntityResponseCollection } from '@/shared/api/graphql/__generated__/schema.graphql';

import { stringifyJson } from '@/shared/lib/helpers/stringify-json';

import defaultReleasesJson from './default-releases.json';

export const defaultReleases =
  stringifyJson<ReleaseEntityResponseCollection>(defaultReleasesJson);
