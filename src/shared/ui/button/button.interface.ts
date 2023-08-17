import type { SizeVariant } from '@/shared/lib/types/size-variant.interface';
import type { LinkProps } from 'next/link';

type ButtonColorType = 'primary' | 'secondary' | 'clear';
type ButtonVariantType = 'clear' | 'shadow';
type ButtonModType = 'rounded' | 'clear';

interface BaseProps extends React.PropsWithChildren {
  className?: string;
  variant?: ButtonVariantType;
  mod?: ButtonModType;
  colorVariant?: ButtonColorType;
  sizeVariant?: SizeVariant;
  fullWidth?: boolean;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
}

export type ButtonProps = JSX.IntrinsicElements['button'] &
  BaseProps & {
    href?: LinkProps['href'];
  };

export type AnchorProps = JSX.IntrinsicElements['a'] & BaseProps & LinkProps;

export type PolymorphicButtonProps = ButtonProps | AnchorProps;

export interface PolymorphicButton {
  (props: AnchorProps): JSX.Element;
  (props: ButtonProps): JSX.Element;
}
