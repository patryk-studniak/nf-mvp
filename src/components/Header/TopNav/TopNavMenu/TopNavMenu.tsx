import { FC, useState } from 'react';
import { NavItem } from '@/services/api/getHeaderData';
import { TopNavMenuButton } from '@/components/Header/TopNav/TopNavMenu/TopNavMenuButton';

import styles from './TopNavMenu.module.scss';

interface TopNavMenuProps {
    buttons: NavItem[];
}

export const TopNavMenu: FC<TopNavMenuProps> = ({ buttons }) => {
    const [activeButtonId, setActiveButtonId] = useState<string>();

    const handleSetActiveButton = (id: string) => {
        setActiveButtonId(id);
    };

    return (
        <nav className={styles.topNavMenu}>
            {buttons.map((button, index) => (
                <TopNavMenuButton
                    key={`${index}${button.href}`}
                    item={button}
                    onClick={handleSetActiveButton}
                    isActive={activeButtonId === button.id}
                />
            ))}
        </nav>
    );
};
