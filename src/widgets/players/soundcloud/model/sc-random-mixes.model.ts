import type {
  MixEntity,
  MixEntityResponse,
  MixEntityResponseCollection,
} from '@/shared/api/graphql/__generated__/schema.graphql';

import { sample } from 'effector';

import { $currentSCLink, soundcloud } from './soundcloud.model';

export const randomMixes = soundcloud.domain('randomMixes');

export const $randomMixes = randomMixes.createStore<MixEntity[]>([]);

export const fetchRandomMixesFx = randomMixes.createEffect(
  async (id: number | string) => {
    const randomMixes = await fetch('/api/random-mixes', {
      method: 'POST',
      body: id as string,
    })
      .then((res) => res.json())
      .then((data) => data.randomMixes as MixEntityResponseCollection)
      .catch((error) => {
        throw new Error('Что-то пошло не так', { cause: error });
      });

    return randomMixes.data as MixEntity[];
  },
);

export const fetchRandomMixFx = randomMixes.createEffect(async () => {
  const randomMix = await fetch('/api/random-mix')
    .then((res) => res.json())
    .then((data) => data.randomMix as MixEntityResponse);

  return randomMix.data;
});

sample({ clock: fetchRandomMixesFx.doneData, target: $randomMixes });

$randomMixes.on(fetchRandomMixFx.doneData, (prev, next) => {
  const old = prev.filter(
    ({ attributes }) =>
      attributes?.linksToMixes?.soundcloudLink !==
      next?.attributes?.linksToMixes?.soundcloudLink,
  );
  if (next) {
    return [...old, next];
  }
});

sample({
  clock: $currentSCLink,
  source: {
    randomMixes: $randomMixes,
  },
  fn({ randomMixes }, scLink) {
    const old = randomMixes.filter(
      ({ attributes }) => attributes?.linksToMixes?.soundcloudLink !== scLink,
    );
    return old;
  },
  target: $randomMixes,
});

const MAX_MIXES_COUNT = 3;

sample({
  clock: $currentSCLink,
  source: $randomMixes,
  filter: (mixes) => {
    return mixes.length < MAX_MIXES_COUNT;
  },
  target: fetchRandomMixFx,
});
