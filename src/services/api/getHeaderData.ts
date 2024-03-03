import { universalFetch } from '@/services/utils/fetch/universalFetch';
import { HttpMethod } from '@/services/utils/fetch/model';

export enum UtilityIcon {
    SEARCH = 'Search',
    PROFILE = 'Profile',
    CART = 'Cart',
    PLAY = 'Play',
    PAUSE = 'Pause',
}

export interface NavItem {
    id: string;
    title: string;
    href: string;
}

export interface UtilityItem {
    id: string;
    title: string;
    icon: UtilityIcon;
}

export interface GetHeaderDataResponse {
    nav: NavItem[];
    utilityButtons: UtilityItem[];
}

export const getHeaderData = async () =>
    universalFetch<GetHeaderDataResponse>('data/header-data.json', {
        method: HttpMethod.GET,
    });
