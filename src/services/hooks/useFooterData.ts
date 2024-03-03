import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { ErrorBody } from '@/services/utils/fetch/model';
import { getFooterData, type GetFooterDataResponse } from '@/services/api/getFooterData';

export const USE_FOOTER_DATA_KEY = 'useFooterDataKey';

type UseFooterDataResult = UseQueryResult<GetFooterDataResponse, ErrorBody>;

export const useFooterData = (): UseFooterDataResult => {
    return useQuery({
        queryKey: [USE_FOOTER_DATA_KEY],
        queryFn: getFooterData,
    });
};
