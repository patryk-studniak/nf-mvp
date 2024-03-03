import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { ErrorBody } from '@/services/utils/fetch/model';
import { getHeroData, type GetHeroResponse } from '@/services/api/getHeroData';

export const USE_HERO_DATA_KEY = 'useHeroDataKey';

type UseHeroDataResult = UseQueryResult<GetHeroResponse, ErrorBody>;

export const useHeroData = (): UseHeroDataResult => {
    return useQuery({
        queryKey: [USE_HERO_DATA_KEY],
        queryFn: getHeroData,
    });
};
