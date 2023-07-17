import { root } from '@/shared/lib/effector/root-domain';

export const archiveNav = root.domain('archiveNav');

export const clickArchiveNavType = archiveNav.createEvent<
  'mood' | 'genres' | null
>();
export const $clickedArchiveNavType = archiveNav.createStore<
  'mood' | 'genres' | null
>(null);
$clickedArchiveNavType.on(clickArchiveNavType, (prev, next) =>
  prev === next ? null : next
);

export const setNavHeightEv = archiveNav.createEvent<number>();
export const $navHeight = archiveNav
  .createStore<number>(0)
  .on(setNavHeightEv, (_, next) => next);
