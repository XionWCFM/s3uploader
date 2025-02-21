import {
  DefaultProps,
  DefaultPropsProvider,
  ErrorBoundary,
  Suspense,
} from "@suspensive/react";
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { OverlayProvider } from "overlay-kit";
import React from "react";
import { type PropsWithChildren, useState } from "react";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

export const Providers = ({ children }: PropsWithChildren) => {
  const [defaultProps] = useState(
    () => new DefaultProps({ Delay: { ms: 200 } })
  );
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            throwOnError: true,
            staleTime: 1000 * 60 * 5,
            gcTime: 1000 * 60 * 10,
            retry: 0,
          },
          mutations: {
            retry: 0,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <DefaultPropsProvider defaultProps={defaultProps}>
        <OverlayProvider>
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary onReset={reset} fallback={null}>
                <Suspense fallback={null}>{children}</Suspense>
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
          <ReactQueryDevtools initialIsOpen={false} />
          <Suspense>
            <TanStackRouterDevtools />
          </Suspense>
        </OverlayProvider>
      </DefaultPropsProvider>
    </QueryClientProvider>
  );
};
