import { Locales, SizeVariant } from '@/lib/types';
import { Dispatch, SetStateAction } from 'react';

export interface LanguageButtonGroupProps {
  sizeVariant: Extract<SizeVariant, 'medium' | 'large'>;
  langDisabled: {
    ru: boolean;
    en: boolean;
  };
  activeLang: Locales;
  setActiveLang: Dispatch<SetStateAction<Locales>>;
}
