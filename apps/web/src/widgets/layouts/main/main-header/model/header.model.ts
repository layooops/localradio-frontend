import { createEvent, createStore } from 'effector';

export const openMobileMenu = createEvent<boolean>();
export const $isOpenedMobileMenu = createStore<boolean>(false);
$isOpenedMobileMenu.on(openMobileMenu, (_, next) => next);
