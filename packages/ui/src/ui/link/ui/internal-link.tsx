import Link from 'next/link';
import { forwardRef, type ForwardedRef } from 'react';
import { useLinkClasses, type InternalLinkProps } from '../lib';

export const InternalLink = forwardRef<HTMLAnchorElement, InternalLinkProps>((props, ref) => {
  const {
    colorVariant,
    mod = 'rounded',
    shadowVariant = 'shadow',
    disabled,
    sizeVariant,
    fullWidth,
    className,
    ...rest
  } = props;

  const linkClasses = useLinkClasses({
    disabled,
    sizeVariant,
    fullWidth,
    className,
    mod,
    shadowVariant,
    colorVariant,
  });

  return <Link className={linkClasses} ref={ref as ForwardedRef<HTMLAnchorElement>} {...rest} />;
});
