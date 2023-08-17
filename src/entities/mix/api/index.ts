import { fetchMixes } from './fetch-mixes';
import { MixesDocument } from './mix.graphql.interface';
import { MixSiblingsDocument } from './mix-siblings.graphql.interface';

export { defaultMixes } from './default-mixes';

export const MixDocuments = {
  MixesDocument,
  MixSiblingsDocument,
};

export const MixApi = Object.assign(MixDocuments, { fetchMixes });
