import clsx from 'clsx';
import { ReactElement, cloneElement } from 'react';

import React from 'react';
import { Button, ButtonProps } from '../button';
import classes from './button-group.module.css';

type ButtonGroupPropsSize = 'extra-small' | 'small' | 'medium' | 'large';
type ButtonGroupDirection = 'vertical' | 'horizontal';

export interface ButtonGroupProps {
  size?: ButtonGroupPropsSize;
  direction?: ButtonGroupDirection;
  children: ReactElement<typeof Button> | Array<ReactElement<typeof Button>>;
  variant?: 'detached' | 'attached';
}

export const ButtonGroup = (props: ButtonGroupProps) => {
  const { size = 'medium', direction = 'horizontal', variant = 'detached', children } = props;

  const buttonGroupClasses = clsx(
    classes['button-group'],
    classes[`button-group-size-${size}`],
    classes[`button-group-direction-${direction}`],
    { [classes['button-group-attached']]: variant === 'attached' },
  );

  return (
    <div className={buttonGroupClasses}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return cloneElement(child, {
            size: size,
            hasBorder: variant === 'attached',
          } as Partial<ButtonProps>);
        }
        return child;
      })}
    </div>
  );
};
