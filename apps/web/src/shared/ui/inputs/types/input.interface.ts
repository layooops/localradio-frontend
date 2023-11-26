import type { InputHTMLAttributes, ReactNode, RefObject } from 'react';

export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: ReactNode;
  mask?: string;
  onAccept?: (value: string, masked: any) => void;
}

export interface InputProps extends Omit<BaseInputProps, 'onChange'> {
  inputRef?: RefObject<HTMLInputElement>;
  value?: string;
  defaultValue?: string;
  onChange?(value: string): void;
  error?: ReactNode;
}

export interface PhoneInputProps extends Omit<BaseInputProps, 'onChange'> {
  inputRef?: RefObject<HTMLInputElement>;
  value?: string;
  defaultValue?: string;
  error?: ReactNode;
  onChange?(value: string): void;
}
