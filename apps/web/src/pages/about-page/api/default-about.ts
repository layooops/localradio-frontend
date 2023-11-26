import { stringifyJson } from '@/shared/lib/helpers/stringify-json';
import type { Description } from '@/shared/lib/types/description.interface';
import defaultAboutJson from './default-about.json';

export const defaultAbout = stringifyJson<Description>(defaultAboutJson);
