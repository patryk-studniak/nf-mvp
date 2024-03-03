import { FC } from 'react';
import { getFooterDescriptionHtml } from '@/components/Footer/FooterContent/helpers';

import styles from './FooterContent.module.scss';

interface FooterContentProps {
    brandName?: string;
    content: string;
}

const HighlightedContent = ({ content, brandName }: FooterContentProps) => (
    <div
        className={styles.footerContent}
        dangerouslySetInnerHTML={{ __html: getFooterDescriptionHtml({ content, brandName }) }}
    />
);

export const FooterContent: FC<FooterContentProps> = ({ content, brandName }) => {
    return (
        <div className={styles.footerContentWrapper}>
            <HighlightedContent content={content} brandName={brandName} />
        </div>
    );
};
