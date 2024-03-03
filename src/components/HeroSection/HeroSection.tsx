'use client';
import { FC } from 'react';
import { HeroDescription } from '@/components/HeroSection/HeroDescription/HeroDescription';
import { useHeroData } from '@/services/hooks/useHeroData';
import { Player } from '@/components/common/Player/Player';

import styles from './HeroSection.module.scss';

export const HeroSection: FC = () => {
    const { data } = useHeroData();

    return (
        <section className={styles.heroSection}>
            <Player videoType={data?.playerInfo.type} videoUrl={data?.playerInfo.url || ''} />
            <HeroDescription />
        </section>
    );
};
