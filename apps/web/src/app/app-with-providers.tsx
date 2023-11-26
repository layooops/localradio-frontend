import './styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { useFetchStreamTitle } from '@/widgets/layouts/main/main-layout/hooks/use-fetch-stream-title';
import { MainLayout } from '@/widgets/layouts/main/main-layout/ui/main-layout';
import { client } from '@/shared/api/apollo/apollo-client';
import { ErrorBoundaryProvider } from './provider/error-boundary-provider';

export const AppWithProviders = ({ children }: React.PropsWithChildren) => {
  useFetchStreamTitle();
  return (
    <ApolloProvider client={client}>
      <MainLayout>
        <ErrorBoundaryProvider>
          <div className='flex flex-1 flex-col'>{children}</div>
        </ErrorBoundaryProvider>
      </MainLayout>
    </ApolloProvider>
  );
};
