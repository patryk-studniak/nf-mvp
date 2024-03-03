import { dehydrate, DehydratedState, QueryClient, QueryFunction, QueryKey } from '@tanstack/react-query';
import { createQueryClient } from './queryConfig';

export interface PrefetchQuery {
    key: QueryKey;
    fn: QueryFunction;
    enabled?: boolean;
}

interface PrefetchQueriesOptions {
    client?: QueryClient;
}

interface PrefetchQueriesResult {
    queryState: DehydratedState;
    client: QueryClient;
}

export const prefetchQueries = async (
    queries: PrefetchQuery[],
    { client = createQueryClient() }: PrefetchQueriesOptions = {},
): Promise<PrefetchQueriesResult> => {
    const activeQueries = queries.filter(({ enabled = true }) => enabled);

    await Promise.all(activeQueries.map(({ key, fn }) => client.prefetchQuery({ queryKey: key, queryFn: fn })));

    return {
        queryState: dehydrate(client),
        client,
    };
};
