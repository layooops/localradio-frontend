import { clsx } from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import classes from './box.module.css';

export type AllowedElements = keyof Pick<
  JSX.IntrinsicElements,
  'div' | 'span' | 'section' | 'legend' | 'ul' | 'li'
>;

type Position = 'relative' | 'absolute' | 'fixed' | 'sticky';
type Background = 'bg' | 'surface';
type Padding = 'extra-small' | 'small' | 'medium' | 'large';

export interface DynamicComponentProps extends HTMLAttributes<HTMLElement> {
  as: AllowedElements;
  children?: ReactNode;
  position?: Position;
  background?: Background;
}

export const Box = ({ as: Component = 'div', ...elementProps }: DynamicComponentProps) => {
  const headingClasses = clsx(classes);

  return <Component className={headingClasses} {...elementProps} />;
};
