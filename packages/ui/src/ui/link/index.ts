import type { FC } from 'react';

import type { ExternalLinkProps, InternalLinkProps } from './lib';
import { ExternalLink, InternalLink } from './ui';

export interface LinkProps {
  External: FC<ExternalLinkProps>;
  Internal: FC<InternalLinkProps>;
}

export const Link: LinkProps = {
  External: ExternalLink,
  Internal: InternalLink,
};
