import { universalFetch } from '@/services/utils/fetch/universalFetch';
import { HttpMethod } from '@/services/utils/fetch/model';

export interface SectionLink {
    href: string;
    text: string;
}

export interface PageSection {
    badgeText: string;
    descriptionHtml: string;
    links: SectionLink[];
}

export enum PageKey {
    HOME = 'Home',
}

export interface GetSectionDataResponse {
    pages: Record<PageKey, PageSection>;
}

export const getSectionData = async () =>
    universalFetch<GetSectionDataResponse>('data/section-data.json', {
        method: HttpMethod.GET,
    });
