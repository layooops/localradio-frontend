import { SizeVariant } from '@/lib/types';
import { ButtonHTMLAttributes } from 'react';

export interface LanguageButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void;
  active: boolean;
  disabled?: boolean;
  sizeVariant?: Extract<SizeVariant, 'large' | 'medium'>;
}
