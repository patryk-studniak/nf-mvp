'use client';
import { useHeroData } from '@/services/hooks/useHeroData';
import { FC } from 'react';
import { HeroButtons } from '@/components/HeroSection/HeroButtons/HeroButtons';

import styles from './HeroDescription.module.scss';

export const HeroDescription: FC = () => {
    const { data } = useHeroData();

    return (
        <div className={styles.heroDescription}>
            <span className={styles.heroDescriptionTextWrapper}>
                <HeroButtons />
                {data?.title && <p className={styles.heroDescriptionTitle}>{data.title}</p>}
                {data?.description && <p className={styles.heroDescriptionText}>{data.description}</p>}
            </span>
        </div>
    );
};
