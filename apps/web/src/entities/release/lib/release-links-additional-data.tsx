import type { ComponentReleaseLinksLinks } from '@/shared/api/graphql/__generated__/schema.graphql';
import { Icon } from '@/shared/ui/icons';
import type { AdditionalDataRecord } from '@/shared/ui/socials-list/links-additional-data';
import { AdditionalDataIconClasses } from '@/shared/ui/socials-list/links-additional-data';

type ReleaseLinksKeys = keyof Omit<
  ComponentReleaseLinksLinks,
  'id' | '__typename'
>;

export const releaseLinksAdditionalData: AdditionalDataRecord<ReleaseLinksKeys> =
  {
    spotify: {
      color: '#24CF5F',
      icon: <Icon.SpotifyIcon className={AdditionalDataIconClasses} />,
      title: 'Spotify',
    },
    soundcloud: {
      color: '#f50',
      icon: <Icon.SCIcon className={AdditionalDataIconClasses} />,
      title: 'Soundcloud',
    },
    bandcamp: {
      color: '#619AA9',
      icon: <Icon.BandcampIcon className={AdditionalDataIconClasses} />,
      title: 'Bandcamp',
    },
    youtubeMusic: {
      color: '#e55211',
      icon: <Icon.YoutubeIcon className={AdditionalDataIconClasses} />,
      title: 'Youtube Music',
    },
    yandexMusic: {
      color: '#FFCC00',
      icon: <Icon.YandexMusicIcon className={AdditionalDataIconClasses} />,
      title: 'Яндекс Музыка',
    },
    vkMusic: {
      color: '#0077FF',
      icon: <Icon.VkMusicIcon className={AdditionalDataIconClasses} />,
      title: 'VK.Music',
    },
    appleMusic: {
      color: '#fc3c44',
      icon: <Icon.AppleMusicIcon className={AdditionalDataIconClasses} />,
      title: 'Apple Music',
    },
  };
