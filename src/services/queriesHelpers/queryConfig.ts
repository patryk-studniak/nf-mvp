import { DefaultOptions, QueryClient, QueryClientConfig } from '@tanstack/react-query';

const MAX_RETRY_COUNT = 3;

export const reactQueryDefaults = {
    reactQueryDefaults: {
        queries: {
            retry: (failureCount, error) => failureCount < MAX_RETRY_COUNT,
            refetchOnWindowFocus: false,
        },
    } as DefaultOptions,
};

export const createQueryClient = (config?: QueryClientConfig): QueryClient => {
    return new QueryClient(config);
};
