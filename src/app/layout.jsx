import React from 'react';
import './globals.css';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import theme from './theme';
import { FOOTER_DATA } from '@/constants/global/footer';
import { FOOTER_CTA_DATA } from '@/constants/home-page/footer-cta-section';
import { SkeletonTheme } from 'react-loading-skeleton';
import Header from '@/components/global/Header/Header';
import TawkToWidget from '@/components/global/TawkToWidget';
import { GoogleTagManager } from '@next/third-parties/google';
import { GLOBAL_SEO } from '@/constants/seo-data';
import GoogleTag from '@/components/global/Header/GoogleTag';
// Dynamically import components that should not be server-rendered
const FooterCTA = dynamic(() => import('@/components/homepage/FooterCTA'), {
  ssr: false,
});

const Footer = dynamic(() => import('@/components/global/footer/Footer'), {
  ssr: false,
});
export const revalidate = 3600;

const pathname = '/';
const filteredData =
  GLOBAL_SEO.find((item) => item.path === pathname) || GLOBAL_SEO[0];
export const metadata = {
  metadataBase: new URL('https://www.esparktalent.com/'),
  title: filteredData?.title,
  description: filteredData?.description,
  keywords: [`eSpark Talent`, `eSpark Solution`, `eSpark Consultants`],
  author: `eSpark Talent`,
  alternates: {
    canonical: `https://www.esparktalent.com${filteredData?.path}`,
    languages: {
      'en-US': '/en-US',
      'en-UK': '/en-UK',
    },
  },
  robots: `index, follow`,
  openGraph: {
    metadataBase: new URL('https://www.esparktalent.com/'),
    title: filteredData?.title,
    description: filteredData?.description,
    type: 'article',
    publishedTime: '2023-01-01T00:00:00.000Z',
    authors: ['eSpark Talent', 'Mehdi Raza'],
    siteName: `eSpark Talent: Get Modern Employee Outsourcing Solutions.`,
    locale: `en_US`,
    images: [
      {
        url: filteredData?.image,
        alt: filteredData?.title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: `summary_large_image`,
    metadataBase: new URL('https://www.esparktalent.com/'),
    title: filteredData?.title,
    description: filteredData?.description,
    siteId: `@eSparkTalent`,
    creator: `@eSparkTalent`,
    images: [`${filteredData?.image}`],
  },
};
export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SkeletonTheme baseColor="#000" highlightColor="#000">
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Header />
              <Box>{children}</Box>
              <FooterCTA data={FOOTER_CTA_DATA} />
              <Footer data={FOOTER_DATA} />
              <TawkToWidget
                propertyId={`6422c8a44247f20fefe86c9e`}
                taskId={`1gsovfhm7`}
              />
              <GoogleTagManager gtmId="GTM-5JWLG8J2" />
              <GoogleTagManager gtmId="G-N43EVHZHXM" />
              <GoogleTag gtmId="G-N43EVHZHXM" />
            </ThemeProvider>
          </AppRouterCacheProvider>
        </SkeletonTheme>
      </body>
    </html>
  );
}
