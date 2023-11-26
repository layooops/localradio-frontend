import clsx from 'clsx';
import { LabelHTMLAttributes, ReactNode } from 'react';
import classes from './label.module.css';

interface LabelProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'children'> {
  size?: 'medium' | 'large';
  disabled?: boolean;
  requiredSignAppearance?: 'default' | 'colorized';
  required?: boolean;
  requiredSign?: ReactNode;
  label?: string;
}

export const Label = (props: LabelProps) => {
  const {
    label,
    size = 'medium',
    disabled = false,
    requiredSignAppearance = 'default',
    required = false,
    requiredSign = '*',
    ...rest
  } = props;

  const labelClasses = clsx(classes['label'], classes[`label-size-${size}`], {
    [classes['label-disabled']]: disabled,
  });

  return (
    <label className={labelClasses} {...rest}>
      {label}
      {required && (
        <span className={classes[`label-required-sign-appearance-${requiredSignAppearance}`]}>
          {requiredSign}
        </span>
      )}
    </label>
  );
};
