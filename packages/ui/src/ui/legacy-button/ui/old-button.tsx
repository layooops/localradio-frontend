import { useButtonClasses } from '../lib/hooks/use-button-classes';
import type { ButtonProps } from '../lib/types/button.interface';

import { forwardRef } from 'react';

export const OldButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    colorVariant,
    mod = 'rounded',
    shadowVariant = 'shadow',
    disabled,
    sizeVariant,
    fullWidth,
    className,
    type = 'button',
    children,
    ...rest
  } = props;

  // TODO: сделать менее перегруженным компонент по классам
  const buttonClasses = useButtonClasses({
    disabled,
    sizeVariant,
    fullWidth,
    className,
    mod,
    shadowVariant,
    colorVariant,
  });

  return (
    <button type={type} className={buttonClasses} {...rest} ref={ref}>
      {children}
    </button>
  );
});
