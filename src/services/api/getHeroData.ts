import { universalFetch } from '@/services/utils/fetch/universalFetch';
import { HttpMethod } from '@/services/utils/fetch/model';
import type { PlayerType } from '@/components/Player/Player';

export interface PlayerInfo {
    type: PlayerType;
    url: string;
}

export interface HeroButton {
    text: string;
    url: string;
}

export interface GetHeroResponse {
    title: string;
    description: string;
    playerInfo: PlayerInfo;
    buttons: HeroButton[];
}

export const getHeroData = async () =>
    universalFetch<GetHeroResponse>('data/hero-data.json', {
        method: HttpMethod.GET,
    });
