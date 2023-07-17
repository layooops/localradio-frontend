import { clsxm } from '@/shared/lib/helpers/clsxm';
import { Icon } from '@/shared/ui/icons';
import type { MixCardButtonIconProps } from './mix-button.interface';

export const MixCardButtonIcon = ({
  isActive,
  variant,
  className,
}: MixCardButtonIconProps) => {
  const MixCardButtonIconClasses = clsxm(
    ' h-[clamp(0.8rem,5vw,1.12rem)] w-[clamp(0.8rem,5vw,1.12rem)] transition-opacity duration-100 opacity-100 lg:h-[1.12rem] lg:w-[1.12rem] 2xl:h-[1.3rem] 2xl:w-[1.3rem]',
    {
      ' fill-gray-color opacity-60 blur-[1px] group-hover/icon:opacity-70 group-hover/icon:blur-[2px] ':
        isActive,
    },
    {
      'group-hover/icon:opacity-0': !isActive,
    },
    className
  );

  return (
    <div className='relative'>
      {variant === 'soundcloud' ? (
        <Icon.SCIcon className={MixCardButtonIconClasses} />
      ) : (
        <Icon.YoutubeIcon className={MixCardButtonIconClasses} />
      )}
    </div>
  );
};
