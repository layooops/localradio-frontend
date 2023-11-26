import { sample } from 'effector';
import type { Maybe } from 'yup';
import { $currentGlobalPlayer } from '@/features/choose-global-player/model/current-global-player.model';
import { player } from '../../player-domain';

export const youtube = player.domain('youtube');
export const setCurrentYoutubeLinkEv = youtube.createEvent<Maybe<string>>();
export const $currentYoutubeLink = youtube.createStore<Maybe<string>>(null);

export const setIsYoutubePlayingEv = youtube.createEvent<boolean>();
export const $isYoutubePlaying = youtube.createStore<boolean>(false);

export const isClickedPlayYoutubeEv = youtube.createEvent<boolean>();
export const $isClickedPlayYoutube = youtube.createStore<boolean>(false);

sample({
  clock: isClickedPlayYoutubeEv,
  target: $isClickedPlayYoutube,
});
sample({
  clock: setIsYoutubePlayingEv,
  target: $isYoutubePlaying,
});
sample({
  source: $currentGlobalPlayer,
  fn: (src) => src === 'youtubeBottom',
  target: $isClickedPlayYoutube,
});

sample({
  clock: setCurrentYoutubeLinkEv,
  target: $currentYoutubeLink,
});
