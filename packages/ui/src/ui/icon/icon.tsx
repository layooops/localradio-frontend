import { SizeVariant } from '@/lib/types';
import clsx from 'clsx';
import { HTMLAttributes, SVGAttributes } from 'react';
import classes from './icon.module.css';

interface IconProps extends HTMLAttributes<HTMLElement> {
  size: SizeVariant;
  icon?: React.ComponentType<SVGAttributes<SVGElement>>;
  overflowingIcon?: React.ComponentType<SVGAttributes<SVGElement>>;
  isActive?: boolean;
}

export const Icon = (props: IconProps) => {
  const {
    size = 'medium',
    icon: Icon,
    overflowingIcon: OverflowingIcon,
    isActive = false,
    className,
    ...rest
  } = props;
  return (
    <span className={clsx(classes[`icon`], className)} {...rest}>
      <span
        className={clsx(classes[`icon-size-${size}`], {
          [classes['icon-overlapped']]: OverflowingIcon && isActive,
        })}
      >
        {Icon && <Icon className={classes[`icon-size-${size}`]} />}
      </span>
      {OverflowingIcon && isActive && (
        <span className={clsx(classes[`icon-size-${size}`], classes['icon-overlapping'])}>
          <OverflowingIcon className={classes[`icon-size-${size}`]} />
        </span>
      )}
    </span>
  );
};
