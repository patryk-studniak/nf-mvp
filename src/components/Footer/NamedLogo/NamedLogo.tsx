import { FC } from 'react';
import { LogoImage } from '@/components/common/LogoImage/LogoImage';

import styles from './NamedLogo.module.scss';

interface NamedLogoProps {
    brandName?: string;
}

export const NamedLogo: FC<NamedLogoProps> = ({ brandName }) => {
    return (
        <div className={styles.logoWrapper}>
            {brandName && (
                <>
                    <LogoImage />
                    <p className={styles.brandName}>{brandName}</p>
                </>
            )}
        </div>
    );
};
