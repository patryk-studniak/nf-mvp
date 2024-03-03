import { NavItem } from '@/services/api/getHeaderData';
import { FC } from 'react';
import Link from 'next/link';
import { CommonButton } from '@/components/common/Button/Button';

import styles from './TopNavMenuButton.module.scss';

interface TopNavItemProps {
    item: NavItem;
    onClick: (id: string) => void;
    isActive?: boolean;
}

export const TopNavMenuButton: FC<TopNavItemProps> = ({ item, onClick, isActive = false }) => {
    return (
        <CommonButton buttonId={item.id} onClick={onClick} isActive={isActive}>
            <Link className={styles.topNavMenuButton} href={item.href}>
                {item.title}
            </Link>
        </CommonButton>
    );
};
