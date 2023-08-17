import type { NextPage } from 'next';
import type { ComponentType, ReactElement, ReactNode } from 'react';

export type Page = NextPage<P> & {
  // You can disable whichever you don't need
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
