import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface CommonButtonProps {
    buttonId: string;
    onClick: (id: string) => void;
    isActive?: boolean;
    className?: string;
}

export const CommonButton: FC<PropsWithChildren<CommonButtonProps>> = ({
    children,
    onClick,
    buttonId,
    className,
    isActive = false,
}) => {
    return (
        <button
            className={classNames([styles.button, { [styles.active]: isActive }, className])}
            onClick={() => onClick(buttonId)}
        >
            {children}
        </button>
    );
};
