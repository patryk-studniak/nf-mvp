import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { MainHeader } from '@/components/Header/MainHeader';
import { MainFooter } from '@/components/Footer/MainFooter';
import { Providers } from '@/app/Providers';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { prefetchQueries, PrefetchQuery } from '@/services/queriesHelpers/prefetchQueries';
import { USE_ADS_KEY } from '@/services/hooks/useAds';
import { getAds } from '@/services/api/getAds';
import { USE_HERO_DATA_KEY } from '@/services/hooks/useHeroData';
import { getHeroData } from '@/services/api/getHeroData';
import { USE_HEADER_DATA_KEY } from '@/services/hooks/useHeaderData';
import { getHeaderData } from '@/services/api/getHeaderData';
import { USE_FOOTER_DATA_KEY } from '@/services/hooks/useFooterData';
import { getFooterData } from '@/services/api/getFooterData';
import { USE_SECTION_DATA_KEY } from '@/services/hooks/useSectionData';
import { getSectionData } from '@/services/api/getSectionData';
import { Exo, Inter, Space_Grotesk } from 'next/font/google';
import classNames from 'classnames';

import '../styles/global.scss';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const exo = Exo({ subsets: ['latin'], variable: '--font-exo' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

const getClientWithPrefetchedData = async (): Promise<QueryClient> => {
    const queries: PrefetchQuery[] = [
        {
            key: [USE_ADS_KEY],
            fn: () => getAds(),
        },
        {
            key: [USE_HERO_DATA_KEY],
            fn: () => getHeroData(),
        },
        {
            key: [USE_HEADER_DATA_KEY],
            fn: () => getHeaderData(),
        },
        {
            key: [USE_FOOTER_DATA_KEY],
            fn: () => getFooterData(),
        },
        {
            key: [USE_SECTION_DATA_KEY],
            fn: () => getSectionData(),
        },
    ];

    const { client } = await prefetchQueries(queries);

    return client;
};

export const metadata: Metadata = {
    title: 'Lorem Ipsum',
    description: 'Lorem Ipsum test app',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    const client = await getClientWithPrefetchedData();

    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className={classNames([inter.variable, exo.variable, spaceGrotesk.variable])}>
                <Providers queryState={dehydrate(client)}>
                    <MainHeader hasAds />
                    {children}
                    <MainFooter />
                </Providers>
            </body>
        </html>
    );
}
