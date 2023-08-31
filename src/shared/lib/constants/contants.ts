import { YOUTUBE_ID } from '@/shared/config/environment';

export const DEBOUNCE_TIMEOUT_IN_MS = 350;
export const DEFAULT_DELAY_MS = 500;

export const REFETCH_STREAM_IN_MS = 60000;
export const DEFAULT_QUANTITY = 0;

export const STREAM_DISABLED_TITLE = 'Stream is sleeping right now';
export const STREAM_OFFLINE_TITLE = 'Local Radio - offline';

export const YOUTUBE_LIVE_LINK = `https://www.youtube.com/embed/live_stream?channel=${YOUTUBE_ID}&autoplay=1&mute=1`;

export const ARROW_RIGHT_SYMBOL = '→'

export const PHONE_REGEX =
  /^(\+7|7|8)[\s\-]\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

export const PRODUCT_QUANTITY_RESTRICTION = {
  min: 1,
  max: 7,
};
