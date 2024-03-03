import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { getAds, type GetAdsResponse } from '@/services/api/getAds';
import { ErrorBody } from '@/services/utils/fetch/model';

export const USE_ADS_KEY = 'useAdsKey';

type UseAdsResult = UseQueryResult<GetAdsResponse, ErrorBody>;

export const useAds = (): UseAdsResult => {
    return useQuery({
        queryKey: [USE_ADS_KEY],
        queryFn: getAds,
    });
};
