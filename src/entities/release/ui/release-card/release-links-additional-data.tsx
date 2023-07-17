import type {
  ComponentLinksToSocialsLinksToSocials,
  ComponentReleaseLinksLinks,
} from '@/shared/api/graphql/__generated__/schema.graphql';
import { Icon } from '@/shared/ui/icons';

const IconClasses =
  'h-[clamp(12px,6vw,15px)] w-[clamp(12px,6vw,15px)] lg:h-[20px] lg:w-[20px]';

type ReleaseLinksKeys = keyof Omit<
  ComponentReleaseLinksLinks,
  'id' | '__typename'
>;
type SocialsLinksKeys = keyof Omit<
  ComponentLinksToSocialsLinksToSocials,
  'id' | '__typename'
>;

interface LinkAdditionalData {
  color?: string;
  icon: JSX.Element;
  title?: string;
}

type AdditionalDataRecord<T extends string> = Record<
  T,
  LinkAdditionalData | null
>;

export const releaseLinksAdditionalData: AdditionalDataRecord<ReleaseLinksKeys> =
  {
    spotify: {
      color: '#24CF5F',
      icon: <Icon.SpotifyIcon className={IconClasses} />,
      title: 'Spotify',
    },
    soundcloud: {
      color: '#f50',
      icon: <Icon.SCIcon className={IconClasses} />,
      title: 'Soundcloud',
    },
    bandcamp: {
      color: '#619AA9',
      icon: <Icon.BandcampIcon className={IconClasses} />,
      title: 'Bandcamp',
    },
    youtubeMusic: {
      color: '#e55211',
      icon: <Icon.YoutubeIcon className={IconClasses} />,
      title: 'Youtube Music',
    },
    yandexMusic: {
      color: '#FFCC00',
      icon: <Icon.YandexMusicIcon className={IconClasses} />,
      title: 'Яндекс Музыка',
    },
    vkMusic: {
      color: '#0077FF',
      icon: <Icon.VkMusicIcon className={IconClasses} />,
      title: 'VK.Music',
    },
    appleMusic: {
      color: '#fc3c44',
      icon: <Icon.AppleMusicIcon className={IconClasses} />,
      title: 'Apple Music',
    },
  };

export const socialsAdditionalData: AdditionalDataRecord<SocialsLinksKeys> = {
  SCLink: { icon: <Icon.SCIcon className={IconClasses} /> },
  BCLink: { icon: <Icon.BandcampIcon className={IconClasses} /> },
  TGLink: { icon: <Icon.TGIcon className={IconClasses} /> },
  VKLink: { icon: <Icon.VKIcon className={IconClasses} /> },
  IGLink: null,
};
