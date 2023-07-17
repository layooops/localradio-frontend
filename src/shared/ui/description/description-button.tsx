import { clsxm } from '@/shared/lib/helpers/clsxm';
import type { SizeVariant } from '@/shared/lib/types/size-variant.interface';
import { Button } from '../button/button';

interface DescriptionButtonProps {
  text: string;
  onClick: () => void;
  selectedLang: 'en' | 'ru';
  lang: 'en' | 'ru';
  disabled?: boolean;
  sizeVariant?: SizeVariant;
  title: string;
}

export const DescriptionButton = ({
  text,
  onClick,
  lang,
  selectedLang,
  disabled,
  sizeVariant,
}: DescriptionButtonProps) => {
  return (
    <Button
      sizeVariant='small'
      type='button'
      colorVariant='secondary'
      disabled={disabled}
      onClick={onClick}
      className={clsxm(
        '!w-fit px-2 text-[0.75rem] font-normal hover:!bg-black  lg:text-[0.8rem]  xl:text-[0.875rem] ',
        { 'bg-black !text-primary': selectedLang === lang },
        {
          'bg-primary !text-black hover:!text-primary':
            selectedLang !== lang && !disabled,
        },
        { 'lg:rounded-l-none xl:pl-3.5': sizeVariant !== 'large' }
      )}
    >
      {text}
    </Button>
  );
};
