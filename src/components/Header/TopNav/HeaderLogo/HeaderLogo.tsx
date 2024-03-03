import { FC } from 'react';
import { LogoImage } from '@/components/common/LogoImage/LogoImage';

import styles from './HeaderLogo.module.scss';

export const HeaderLogo: FC = () => {
    return (
        <div className={styles.headerLogo}>
            <LogoImage />
        </div>
    );
};
