import { universalFetch } from '@/services/utils/fetch/universalFetch';
import { HttpMethod } from '@/services/utils/fetch/model';

export interface Ad {
    id: number;
    text: string;
    promoCode: string;
}

export interface GetAdsResponse {
    ads: Ad[];
}

export const getAds = async () =>
    universalFetch<GetAdsResponse>('data/ads-data.json', {
        method: HttpMethod.GET,
    });
