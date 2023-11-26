import { sample } from 'effector';
import type { Maybe } from 'yup';
import { $currentGlobalPlayer } from '@/features/choose-global-player/model/current-global-player.model';
import { player } from '../../player-domain';

export const soundcloud = player.domain('soundcloud');

export const isClickedPlayScEv = soundcloud.createEvent<boolean>();
export const setIsSCPlayingEv = soundcloud.createEvent<boolean>();
export const $isClickedPlaySc = soundcloud.createStore<boolean>(false);
export const $isSCPlaying = soundcloud.createStore<boolean>(false);
export const setCurrentScLinkEv = soundcloud.createEvent<Maybe<string>>();
export const $currentSCLink = soundcloud.createStore<Maybe<string>>(null);
export const playNextEvent = soundcloud.createEvent<string>();
export const setLinkToMixEv = soundcloud.createEvent<string>();
export const $linkToMix = soundcloud.createStore<Maybe<string>>(null);

export const openWidgetEv = soundcloud.createEvent<boolean>();
export const $isOpenedWidget = soundcloud.createStore<boolean>(false);

sample({
  clock: isClickedPlayScEv,
  target: $isClickedPlaySc,
});
sample({
  clock: setIsSCPlayingEv,
  target: $isSCPlaying,
});
sample({
  source: $currentGlobalPlayer,
  fn: (src) => src === 'soundcloud',
  target: $isClickedPlaySc,
});

sample({
  clock: setCurrentScLinkEv,
  target: $currentSCLink,
});
sample({
  clock: setLinkToMixEv,
  target: $linkToMix,
});

sample({
  clock: openWidgetEv,
  source: $currentGlobalPlayer,
  fn: (src, clock) =>
    src === 'soundcloud' || src === 'youtubeBottom' ? clock : false,
  target: $isOpenedWidget,
});
