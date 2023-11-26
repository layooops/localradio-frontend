import { player } from '@/widgets/players/player-domain';

export const currentPlayer = player.domain('currentPlayer');

export type CurrentGlobalPlayer =
  | 'soundcloud'
  | 'youtube'
  | 'stream'
  | 'youtubeBottom'
  | null;

export const setCurrentGlobalPlayerEv =
  currentPlayer.createEvent<CurrentGlobalPlayer>();
export const resetCurrentGlobalPlayerEv = currentPlayer.createEvent<void>();
export const $currentGlobalPlayer = currentPlayer
  .createStore<CurrentGlobalPlayer>(null)
  .on(setCurrentGlobalPlayerEv, (_, player) => player)
  .reset(resetCurrentGlobalPlayerEv);
