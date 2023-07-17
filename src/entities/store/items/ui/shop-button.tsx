import type { Maybe } from 'yup';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import type { SizeVariant } from '@/shared/lib/types/size-variant.interface';
import { Icon } from '@/shared/ui/icons';

export interface BaseProps {
  operation: 'plus' | 'minus';
  sizeVariant?: SizeVariant;
  quantity?: Maybe<number>;
  onClick?: () => void;
}

type ShopButtonProps = JSX.IntrinsicElements['button'] & BaseProps;

export const ShopButton = ({
  operation,
  sizeVariant = 'large',
  disabled,
  quantity,
  ...rest
}: ShopButtonProps) => {
  return (
    <button
      {...rest}
      className={clsxm(
        'flex aspect-square h-full items-center justify-center stroke-white px-1.5 transition-colors ',
        {
          'pointer-events-none bg-gray-300 stroke-gray-color text-gray-color':
            disabled,
        },
        { 'hover:bg-white hover:stroke-black': !disabled }
      )}
    >
      {operation === 'minus' ? (
        <Icon.MinusIcon
          className={clsxm(
            { 'w-3.5 lg:w-4': sizeVariant === 'small' },
            { 'w-4 lg:w-5 2xl:w-6': sizeVariant === 'large' }
          )}
        />
      ) : (
        <Icon.PlusIcon
          className={clsxm(
            { 'w-3.5 lg:w-4': sizeVariant === 'small' },
            { 'w-4 lg:w-5 2xl:w-6': sizeVariant === 'large' }
          )}
        />
      )}
    </button>
  );
};
