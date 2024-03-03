import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { ErrorBody } from '@/services/utils/fetch/model';
import { getHeaderData, type GetHeaderDataResponse } from '@/services/api/getHeaderData';

export const USE_HEADER_DATA_KEY = 'useHeaderDataKey';

type UseHeaderDataResult = UseQueryResult<GetHeaderDataResponse, ErrorBody>;

export const useHeaderData = (): UseHeaderDataResult => {
    return useQuery({
        queryKey: [USE_HEADER_DATA_KEY],
        queryFn: getHeaderData,
    });
};
