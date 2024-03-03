'use client';
import { FC } from 'react';
import { AdvertBar } from '@/components/Header/AdvertBar/AdvertBar';
import { TopNav } from '@/components/Header/TopNav/TopNav';

import styles from './MainHeader.module.scss';

interface MainHeaderProps {
    hasAds?: boolean;
}

export const MainHeader: FC<MainHeaderProps> = ({ hasAds }) => {
    return (
        <div className={styles.mainHeaderWrapper}>
            {hasAds && <AdvertBar />}
            <TopNav />
        </div>
    );
};
