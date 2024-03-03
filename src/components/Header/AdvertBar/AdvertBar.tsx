'use client';
import { FC } from 'react';
import { useAds } from '@/services/hooks/useAds';
import { GradientSeparatorBar } from '@/components/common/GradientSeparatorBar/GradientSeparatorBar';

import styles from './AdvertBar.module.scss';

export const AdvertBar: FC = () => {
    const { data } = useAds();

    return (
        <>
            <div className={styles.advertBar}>
                {data?.ads &&
                    data.ads.map(({ id, text, promoCode }, index) => (
                        <div key={id}>
                            <span className={styles.advertText}>{text}</span>
                            <span className={styles.advertPromoCodeText}>{promoCode}</span>
                        </div>
                    ))}
            </div>
            <GradientSeparatorBar />
        </>
    );
};
