import { clsxm } from '@/shared/lib/clsxm';
import { GenreButtonProps } from '../types/genre.interface';
import { GenreButton } from './genre-button';

export const GenreItem = (props: GenreButtonProps) => {
  const { type, isActive, title, ...rest } = props;
  switch (type) {
    case 'genre': {
      return (
        <li className='list-none'>
          <GenreButton title={title} {...rest} />
        </li>
      );
    }
    case 'shopItemSize': {
      return (
        <div
          {...rest}
          className={clsxm(
            'flex w-fit items-center border-2 border-black px-2 py-1 text-[0.8rem] font-semibold  hover:bg-black hover:text-primary md:text-[0.85rem] 2xl:text-[1.2rem]',
            { 'bg-black text-primary': isActive }
          )}
        >
          {title}
        </div>
      );
    }
    default:
      return null;
  }
};
