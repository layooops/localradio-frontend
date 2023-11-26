import type { MixEntityResponseCollection } from '@/shared/api/graphql/__generated__/schema.graphql';
import { stringifyJson } from '@/shared/lib/helpers/stringify-json';
import defaultMixesJson from './default-mixes.json';

export const defaultMixes =
  stringifyJson<MixEntityResponseCollection>(defaultMixesJson);
