import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { ErrorBody } from '@/services/utils/fetch/model';
import { getSectionData, type GetSectionDataResponse } from '@/services/api/getSectionData';

export const USE_SECTION_DATA_KEY = 'useSectionDataKey';

type UseSectionDataResult = UseQueryResult<GetSectionDataResponse, ErrorBody>;

export const useSectionData = (): UseSectionDataResult => {
    return useQuery({
        queryKey: [USE_SECTION_DATA_KEY],
        queryFn: getSectionData,
    });
};
