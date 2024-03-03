'use client';
import { type DehydratedState, HydrationBoundary, QueryCache, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren, ReactElement, useState } from 'react';
import { createQueryClient, reactQueryDefaults } from '@/services/queriesHelpers/queryConfig';

export interface ProvidersProps {
    globalQueryState?: DehydratedState;
    queryState?: DehydratedState;
}

export function Providers({ globalQueryState, queryState, children }: PropsWithChildren<ProvidersProps>): ReactElement {
    const [queryClient] = useState(() =>
        createQueryClient({
            ...reactQueryDefaults,
            queryCache: new QueryCache(),
        }),
    );

    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={globalQueryState}>
                <HydrationBoundary state={queryState}>{children}</HydrationBoundary>
            </HydrationBoundary>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
