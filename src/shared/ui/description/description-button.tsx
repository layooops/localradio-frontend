import { clsxm } from '@/shared/lib/clsxm';
import type { SizeVariant } from '@/shared/types/size-variant.interface';
import { Button } from '../button/button';

interface DescriptionButtonProps {
  text: string;
  setDescriptionLang: (lang: 'en' | 'ru') => void;
  selectedLang: 'en' | 'ru';
  lang: 'en' | 'ru';
  disabled?: boolean;
  sizeVariant?: SizeVariant;
  title: string;
}

export const DescriptionButton = ({
  text,
  setDescriptionLang,
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
      onClick={() => setDescriptionLang(lang)}
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
