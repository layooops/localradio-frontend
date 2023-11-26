import { player } from '@/widgets/players/player-domain';
import type { CurrentMixPlayer } from '../types/toggle-player.interface';

const currentMixPlayer = player.domain('currentMixPlayer');

export const toggleMixPlayerEv =
  currentMixPlayer.createEvent<CurrentMixPlayer>();
export const setMixPlayerErrorEv =
  currentMixPlayer.createEvent<CurrentMixPlayer | null>();

export const $currentMixPlayer = currentMixPlayer
  .createStore<CurrentMixPlayer>('video')
  .on(toggleMixPlayerEv, (_, player) => player);

export const $currentMixPlayerError = currentMixPlayer
  .createStore<CurrentMixPlayer | null>(null)
  .on(setMixPlayerErrorEv, (_, player) => player);
