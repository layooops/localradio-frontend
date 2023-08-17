import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from '@/widgets/error-fallback/error-fallback';

export const ErrorBoundaryProvider = ({
  children,
}: React.PropsWithChildren) => {
  const errorHandler = (
    error: Error,
    info: {
      componentStack: string;
    },
  ) => {
    console.error('Logging', error, info);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler}>
      {children}
    </ErrorBoundary>
  );
};
