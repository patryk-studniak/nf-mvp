'use client';
import { PageKey } from '@/services/api/getSectionData';
import { useSectionData } from '@/services/hooks/useSectionData';
import { Badge } from '@/components/Section/Badge/Badge';
import { SectionContent } from '@/components/Section/SectionContent/SectionContent';
import { SectionLinks } from '@/components/Section/SectionLinks/SectionLinks';

import styles from './Section.module.scss';

interface SectionProps {
    page: PageKey;
}

export const Section = ({ page }: SectionProps) => {
    const { data } = useSectionData();
    const sectionData = data?.pages[page];

    return (
        <section className={styles.section}>
            <Badge title={sectionData?.badgeText} />
            <SectionContent content={sectionData?.descriptionHtml} />
            <SectionLinks links={sectionData?.links || []} />
        </section>
    );
};
