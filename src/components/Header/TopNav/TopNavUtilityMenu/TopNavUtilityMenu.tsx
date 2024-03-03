import { UtilityItem } from '@/services/api/getHeaderData';
import { FC, useState } from 'react';
import { IconButton } from '@/components/common/IconButton/IconButton';

import styles from './TopNavUtilityMenu.module.scss';

interface TopNavUtilityMenuProps {
    buttons: UtilityItem[];
}

export const TopNavUtilityMenu: FC<TopNavUtilityMenuProps> = ({ buttons }) => {
    const [activeButtonId, setActiveButtonId] = useState<string>();

    const handleSetActiveButton = (id: string) => {
        setActiveButtonId(id);
    };

    return (
        <nav className={styles.menuNav}>
            {buttons.map((button, index) => (
                <IconButton
                    key={`${index}${button.title}`}
                    buttonId={button.id}
                    iconType={button.icon}
                    onClick={handleSetActiveButton}
                    isActive={activeButtonId === button.id}
                />
            ))}
        </nav>
    );
};
