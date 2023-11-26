import { forwardRef } from 'react';
import { useLinkClasses, type ExternalLinkProps } from '../lib';

export const ExternalLink = forwardRef<HTMLAnchorElement, ExternalLinkProps>((props, ref) => {
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

  return <a className={linkClasses} ref={ref} {...rest} />;
});
