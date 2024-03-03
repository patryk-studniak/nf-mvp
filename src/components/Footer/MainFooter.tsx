'use client';
import { FC } from 'react';
import { NamedLogo } from '@/components/Footer/NamedLogo/NamedLogo';
import { useFooterData } from '@/services/hooks/useFooterData';
import { FooterContent } from '@/components/Footer/FooterContent/FooterContent';
import { GradientSeparatorBar } from '@/components/common/GradientSeparatorBar/GradientSeparatorBar';

import styles from './MainFooter.module.scss';

export const MainFooter: FC = () => {
    const { data } = useFooterData();

    return (
        <div className={styles.footerWrapper}>
            <GradientSeparatorBar />
            <div className={styles.footer}>
                <NamedLogo brandName={data?.brandName} />
                <FooterContent brandName={data?.brandName} content={data?.description || ''} />
            </div>
        </div>
    );
};
