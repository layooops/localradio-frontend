import { sample } from 'effector';
import type {
  GenreEntityResponseCollection,
  Maybe,
  MixEntityResponseCollection,
} from '@/shared/api/graphql/__generated__/schema.graphql';
import { root } from '@/shared/lib/effector/root-domain';

export const search = root.domain('search');

export interface SearchedData {
  mixes: Maybe<MixEntityResponseCollection>;
  genres: Maybe<GenreEntityResponseCollection>;
}

export const $searchedData = search.createStore<SearchedData>({
  mixes: null,
  genres: null,
});
export const $searchedDataLoading = search.createStore<boolean>(false);
export const $searchError = search.createStore<Error | null>(null);

export const searchMixFx = search.createEffect<string, SearchedData>(
  async (searchValue) => {
    if (!searchValue) return { mixes: null, genres: null };
    const res = await fetch('/api/search', {
      method: 'POST',
      body: searchValue,
    }).then((res) => res.json());
    if (res.error) {
      throw new Error(res.error);
    }
    return res.data as SearchedData;
  },
);

sample({
  clock: searchMixFx.failData,
  target: $searchError,
});

export const searchChanged = search.createEvent<string>();
export const $search = search
  .createStore<string>('')
  .on(searchChanged, (_, next) => next);
export const $startedSearch = search
  .createStore<boolean>(false)
  .on(searchChanged, () => true);
export const $searchValue = search
  .createStore<string>('')
  .on(searchChanged, (_, next) => next);
export const submittedSearchEv = search.createEvent();
export const openSearchModalEv = search.createEvent<boolean>();
export const $isOpenedSearchModal = search
  .createStore<boolean>(false)
  .on(openSearchModalEv, (_, bool) => bool);

sample({
  source: searchChanged,
  target: searchMixFx,
});

sample({
  source: searchMixFx.doneData,
  target: $searchedData,
});

sample({
  clock: searchMixFx.pending,
  target: $searchedDataLoading,
});
