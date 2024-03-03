import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface CommonButtonProps {
    buttonId: string;
    onClick: (id: string) => void;
    isActive?: boolean;
}

export const CommonButton: FC<PropsWithChildren<CommonButtonProps>> = ({
    children,
    onClick,
    buttonId,
    isActive = false,
}) => {
    return (
        <button
            className={classNames([styles.button, { [styles.active]: isActive }])}
            onClick={() => onClick(buttonId)}
        >
            {children}
        </button>
    );
};
