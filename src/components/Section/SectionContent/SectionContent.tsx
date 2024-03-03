'use client';
import { FC } from 'react';

import styles from './SectionContent.module.scss';

interface SectionContentProps {
    content?: string;
}

export const SectionContent: FC<SectionContentProps> = ({ content }) => {
    return <>{content && <span className={styles.sectionContent} dangerouslySetInnerHTML={{ __html: content }} />}</>;
};
