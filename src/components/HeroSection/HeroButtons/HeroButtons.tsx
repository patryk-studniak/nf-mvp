import { FC } from 'react';
import { useHeroData } from '@/services/hooks/useHeroData';
import { CommonButton } from '@/components/common/Button/Button';

import styles from './HeroButtons.module.scss';

export const HeroButtons: FC = () => {
    const { data } = useHeroData();

    return (
        <>
            {data?.buttons.map(({ text, url }) => {
                return (
                    <CommonButton className={styles.button} buttonId={url} key={url} onClick={() => undefined}>
                        {text}
                    </CommonButton>
                );
            })}
        </>
    );
};
