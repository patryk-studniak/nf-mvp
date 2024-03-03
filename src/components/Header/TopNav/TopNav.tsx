import { FC, PropsWithChildren } from 'react';
import { TopNavMenu } from '@/components/Header/TopNav/TopNavMenu/TopNavMenu';
import { useHeaderData } from '@/services/hooks/useHeaderData';
import { TopNavUtilityMenu } from '@/components/Header/TopNav/TopNavUtilityMenu/TopNavUtilityMenu';
import { HeaderLogo } from '@/components/Header/TopNav/HeaderLogo/HeaderLogo';

import styles from './TopNav.module.scss';

const TopNavSegment: FC<PropsWithChildren> = ({ children }) => {
    return <span className={styles.topNavSegment}>{children}</span>;
};

export const TopNav: FC = () => {
    const { data } = useHeaderData();

    return (
        <div className={styles.topNav}>
            <TopNavSegment>{data?.nav && <TopNavMenu buttons={data.nav} />}</TopNavSegment>
            <TopNavSegment>
                <HeaderLogo />
            </TopNavSegment>
            <TopNavSegment>{data?.utilityButtons && <TopNavUtilityMenu buttons={data.utilityButtons} />}</TopNavSegment>
        </div>
    );
};
