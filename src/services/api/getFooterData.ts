import { universalFetch } from '@/services/utils/fetch/universalFetch';
import { HttpMethod } from '@/services/utils/fetch/model';

export interface GetFooterDataResponse {
    brandName: string;
    description: string;
}

export const getFooterData = async () =>
    universalFetch<GetFooterDataResponse>('data/footer-data.json', {
        method: HttpMethod.GET,
    });
