import { createEvent, createStore } from 'effector';

export const setNavHeightEv = createEvent<number>();
export const $navHeight = createStore<number>(0).on(
  setNavHeightEv,
  (_, next) => next,
);
