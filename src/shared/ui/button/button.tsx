import type {
  AnchorProps,
  PolymorphicButton,
  PolymorphicButtonProps,
} from './button.interface';
import type { ForwardedRef } from 'react';

import { forwardRef, memo } from 'react';
import clsx from 'clsx';

import Link from 'next/link';

const isAnchor = (props: PolymorphicButtonProps): props is AnchorProps => {
  return props.href !== undefined;
};

export const Button = memo(
  forwardRef<HTMLButtonElement | HTMLAnchorElement, PolymorphicButtonProps>(
    (props, ref) => {
      const {
        colorVariant,
        mod = 'rounded',
        variant = 'shadow',
        disabled,
        sizeVariant,
        fullWidth,
      } = props;

      const buttonClasses = (className?: string) => {
        return clsx(
          'uppercase flex gap-1 items-center justify-center w-fit font-medium transition-all duration-150',
          { 'rounded-[clamp(4px,5vw,8px)]': mod === 'rounded' },
          { 'w-full': fullWidth },
          {
            'shadow-[0_0_8px_rgba(0,0,0,0.05)]': variant === 'shadow',
          },
          colorVariant &&
            !disabled &&
            {
              primary:
                'lg:bg-primary hover:text-primary text-black hover:bg-black',
              secondary:
                'bg-black lg:hover:bg-primary fill-primary hover:text-black text-primary lg:hover:fill-black',
              clear: '',
            }[colorVariant],
          sizeVariant &&
            {
              small:
                'h-[clamp(1.5rem,10vw,1.875rem)] w-[clamp(1.5rem,10vw,1.875rem)] px-0 lg:h-7 lg:w-7 2xl:h-8 2xl:w-8',
              'extra-small':
                'h-[clamp(1.375rem,10vw,1.65rem)] w-[clamp(1.375rem,10vw,1.65rem)] aspect-square',
              standard:
                'text-[0.75rem] leading-[1.3] px-2 lg:text-[0.8rem] xl:text-[0.875rem] h-6 lg:h-7 2xl:gap-2 2xl:h-8 gap-1',
              large: '',
            }[sizeVariant],
          {
            'pointer-events-none bg-gray-300 stroke-gray-color text-gray-color':
              disabled,
          },
          className,
        );
      };

      if (isAnchor(props)) {
        const {
          colorVariant,
          mod = 'rounded',
          variant = 'shadow',
          disabled,
          sizeVariant,
          fullWidth,
          href,
          as,
          replace,
          scroll,
          shallow,
          passHref,
          prefetch,
          className,
          locale,
          ...rest
        } = props;

        const linkProps = {
          href,
          as,
          replace,
          scroll,
          shallow,
          passHref,
          prefetch,
          locale,
        };

        return (
          <Link
            className={buttonClasses(className)}
            {...rest}
            ref={ref as ForwardedRef<HTMLAnchorElement>}
            {...linkProps}
          />
        );
      }

      if (!isAnchor(props)) {
        const {
          colorVariant,
          mod = 'rounded',
          variant = 'shadow',
          disabled,
          sizeVariant,
          fullWidth,
          className,
          type = 'button',
          ...rest
        } = props;

        return (
          <button
            {...rest}
            type={type}
            className={buttonClasses(className)}
            ref={ref as ForwardedRef<HTMLButtonElement>}
          />
        );
      }

      return null;
    },
  ) as PolymorphicButton,
);
