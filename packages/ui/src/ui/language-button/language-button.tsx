import clsx from 'clsx';

import { OldButton } from '../old-button';
import { LanguageButtonProps } from './language-button.interface';

export const LanguageButton = (props: LanguageButtonProps) => {
  const { text, onClick, active, disabled, sizeVariant, ...rest } = props;

  return (
    <OldButton
      sizeVariant='small'
      type='button'
      colorVariant='secondary'
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        '!w-fit px-2 text-[0.75rem] font-normal lg:text-[0.8rem] xl:text-[0.875rem]',
        !disabled && [
          '',
          { 'bg-black !text-primary hover:!bg-gray-900': active },
          {
            'bg-primary !text-black hover:!text-primary hover:!bg-black': !active,
          },
        ],
        { 'lg:rounded-l-none xl:pl-3.5': sizeVariant !== 'large' },
      )}
      {...rest}
    >
      {text}
    </OldButton>
  );
};
