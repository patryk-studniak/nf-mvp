import { FC } from 'react';

import styles from './Badge.module.scss';

interface BadgeProps {
    title?: string;
}

export const Badge: FC<BadgeProps> = ({ title }) => {
    return <>{title && <h2 className={styles.badge}>{title}</h2>}</>;
};
