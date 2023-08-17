import type { SocialLinks } from '@/shared/lib/types/local-nav.interface';

import { Icon } from '../icons';

interface LocalSocialIconsProps {
  type?: SocialLinks;
}
export const LocalSocialIcons = ({ type }: LocalSocialIconsProps) => {
  switch (type) {
    case 'soundcloud':
      return (
        <Icon.SCIcon className='h-[21px] w-[21px] lg:h-[25px] lg:w-[25px]' />
      );
    case 'telegram':
      return (
        <Icon.TGIcon className='h-[15px] w-[15px] lg:h-[17px] lg:w-[17px]' />
      );
    case 'vk':
      return (
        <Icon.VKIcon className='h-[18px] w-[18px] lg:h-[20px] lg:w-[20px]' />
      );
    case 'instagram':
      return (
        <Icon.IGIcon className='h-[16px] w-[16px] lg:h-[18px] lg:w-[18px]' />
      );
    case 'bandcamp':
      return (
        <Icon.BandcampIcon className='h-[18px] w-[18px] lg:h-[20px] lg:w-[20px]' />
      );
    default:
      return null;
  }
};
