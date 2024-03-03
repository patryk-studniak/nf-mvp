import { FC } from 'react';
import classNames from 'classnames';
import { UtilityIcon } from '@/services/api/getHeaderData';
import { utilityIconsRecord } from './UtilityIconsMap';

import styles from './IconButton.module.scss';

interface IconButtonProps {
    iconType: UtilityIcon;
    buttonId: string;
    onClick: (id: string) => void;
    isActive?: boolean;
    className?: string;
}

export const IconButton: FC<IconButtonProps> = ({ iconType, onClick, buttonId, isActive = false, className }) => {
    const Icon: FC = utilityIconsRecord[iconType];

    return (
        <button
            className={classNames([styles.iconButton, { [styles.active]: isActive }, className])}
            onClick={() => onClick(buttonId)}
        >
            <Icon />
        </button>
    );
};
