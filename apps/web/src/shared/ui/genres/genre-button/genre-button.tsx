import { Link } from '@local-radio/ui';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import type { GenreButtonProps } from '../types/genre.interface';

type GenreBProps = Omit<GenreButtonProps, 'type'>;

export const GenreButton = ({
  sizeVariant,
  colorVariant,
  slug,
  title,
  variant,
}: GenreBProps) => {
  return (
    <Link.Internal
      shadowVariant='clear'
      mod='clear'
      className={clsxm(
        'flex items-center',
        'w-fit font-semibold hover:bg-black hover:text-primary',
        {
          'h-5 border-[2px] border-black px-1.5 text-[0.8rem] hover:bg-black hover:text-primary md:h-6 md:text-[0.85rem]':
            sizeVariant === 'standard',
        },
        {
          'px-1 text-[clamp(0.4rem,6vw,0.75rem)] leading-[1.3] sm:leading-normal':
            sizeVariant === 'small',
        },
        {
          'duration-50 flex items-center bg-primary px-1.5 text-black transition hover:bg-black hover:text-primary lg:px-3':
            sizeVariant === 'large',
        },
        {
          'border-2 border-black': variant === 'solid',
        },
        {
          'bg-primary text-black': colorVariant === 'primary',
        },
      )}
      href={`/archive/genres/${slug}`}
    >
      {title}
    </Link.Internal>
  );
};
