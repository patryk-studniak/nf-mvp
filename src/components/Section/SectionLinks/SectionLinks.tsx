import { FC } from 'react';
import { SectionLink } from '@/services/api/getSectionData';
import Link from 'next/link';

import styles from './SectionLinks.module.scss';

interface SectionLinksProps {
    links: SectionLink[];
}

export const SectionLinks: FC<SectionLinksProps> = ({ links }) => {
    return (
        <>
            {links.map(({ href, text }) => (
                <Link key={href} className={styles.link} href={href} title={text}>
                    {text}
                </Link>
            ))}
        </>
    );
};
