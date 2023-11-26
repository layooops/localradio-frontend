import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { Spinner } from '../../spinner/spinner';
import { ButtonComponentProps } from '../lib/types';

import { Icon } from '../../icon/icon';
import classes from './button.module.css';

const Button = (props: ButtonComponentProps, ref?: React.Ref<HTMLButtonElement>) => {
  const {
    children,
    className,
    disabled,
    type = 'button',
    appearance = 'primary',
    size = 'medium',
    align = 'center',
    hasBorder = false,
    fullWidth = false,
    isLoading = false,
    isActive = false,
    iconOnly = false,
    leftIcon,
    rightIcon,
    overflowingIcon,
    onClick,
    ...rest
  } = props;

  const buttonClasses = clsx(
    classes.button,
    classes[`button-size-${size}`],
    { [classes[`button-size-icon-only-${size}`]]: iconOnly },
    classes[`button-appearance-${appearance}`],
    { [classes[`button-appearance-${appearance}-selected`]]: isActive },
    classes[`button-align-${align}`],
    { [classes[`button-border`]]: hasBorder, [classes['full-width']]: fullWidth },
  );

  const spinnerMarkup = isLoading ? (
    <span className={classes.spinner}>
      <Spinner size='extra-small' className={classes[`button-icon-size-${size}`]} />
    </span>
  ) : null;

  const leftIconMarkup =
    leftIcon && !iconOnly ? (
      <Icon
        className={clsx({ [classes['invisible']]: isLoading })}
        isActive={isActive}
        icon={leftIcon}
        size={size}
        overflowingIcon={overflowingIcon}
      />
    ) : null;

  const childrenMarkup = !iconOnly ? (
    <span className={clsx({ [classes['invisible']]: isLoading })}>{children}</span>
  ) : null;

  const rightIconMarkup =
    rightIcon && !iconOnly ? (
      <Icon
        className={clsx({ [classes['invisible']]: isLoading })}
        isActive={isActive}
        icon={rightIcon}
        size={size}
        overflowingIcon={overflowingIcon}
      />
    ) : null;

  const iconMarkup =
    iconOnly && (props?.icon || props?.leftIcon || props?.rightIcon) ? (
      <Icon
        className={clsx({ [classes['invisible']]: isLoading })}
        isActive={isActive}
        icon={props?.icon || props.leftIcon || props.rightIcon} // Используем icon из пропсов
        size={size}
        overflowingIcon={props.overflowingIcon}
      />
    ) : null;

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={isLoading ? undefined : onClick}
      className={buttonClasses}
      ref={ref}
      {...rest}
    >
      {spinnerMarkup}
      {leftIconMarkup}
      {childrenMarkup}
      {iconMarkup}
      {rightIconMarkup}
    </button>
  );
};

const ForwardedButton = forwardRef(Button);

export { ForwardedButton as Button };
