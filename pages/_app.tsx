import type { Page } from '@/shared/lib/types/page';
import type { AppProps } from 'next/app';

import { AppWithProviders } from '@/app/app-with-providers';

interface Props extends AppProps {
  Component: Page;
}

const MyApp = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <AppWithProviders>
      {getLayout(<Component {...pageProps} />)}
    </AppWithProviders>
  );
};

export default MyApp;
