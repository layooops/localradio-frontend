import clsx from 'clsx';
import { HTMLAttributes, SVGAttributes } from 'react';
import { Icon } from '../../icon/icon';
import classes from './validation-text.module.css';

interface ValidationTextProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  size?: 'medium' | 'large';
  validation?: {
    status: 'valid' | 'invalid' | 'warning' | 'help';
    text?: string;
  };
  leftIcon?: React.ComponentType<SVGAttributes<SVGElement>>;
}

export const ValidationText = (props: ValidationTextProps) => {
  const { size = 'medium', validation, leftIcon, className, ...rest } = props;
  const validationStatus = validation?.status ?? 'help';

  const placeholderText = {
    help: 'Help Validation Text',
    valid: 'Valid Validation Text',
    invalid: 'Invalid Validation Text',
    warning: 'Warning Validation Text',
  }[validationStatus];

  const validationClasses = clsx(
    classes[`validation`],
    classes[`validation-appearance-${validationStatus}`],
    className,
  );

  const leftIconMarkup = leftIcon ? <Icon icon={leftIcon} size={size} /> : null;
  const childrenMarkup = <span>{validation?.text ?? placeholderText}</span>;

  return (
    <div className={validationClasses} {...rest}>
      {leftIconMarkup}
      {childrenMarkup}
    </div>
  );
};
