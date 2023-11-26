import { clsx } from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import classes from './text.module.css';

export type AllowedElements = keyof Pick<
  JSX.IntrinsicElements,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong' | 'legend' | 'dt' | 'dd'
>;

type FontWeight = 'regular' | 'medium' | 'bold';

type AsVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body-small'
  | 'body-medium'
  | 'body-large'
  | 'body-extra-large';

type textDecoration = 'line-through' | 'none';

export interface DynamicComponentProps extends HTMLAttributes<HTMLElement> {
  as: AllowedElements;
  children?: ReactNode;
  fontWeight?: FontWeight;
  variant?: AsVariant;
  textDecoration?: textDecoration;
}

export const Text = ({
  as: Component = 'h2',
  textDecoration = 'none',
  fontWeight,
  variant,
  ...elementProps
}: DynamicComponentProps) => {
  const headingClasses = clsx(
    fontWeight && classes[`font-weight-${fontWeight}`],
    variant && classes[`${variant}`],
    classes[`text-decoration-${textDecoration}`],
  );

  return <Component className={headingClasses} {...elementProps} />;
};
