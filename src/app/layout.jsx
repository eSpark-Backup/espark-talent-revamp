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

// Dynamically import components that should not be server-rendered
const FooterCTA = dynamic(() => import('@/components/homepage/FooterCTA'), {
  ssr: false,
});

const Footer = dynamic(() => import('@/components/global/footer/Footer'), {
  ssr: false,
});

export const metadata = {
  title: 'eSpark Talent: Get Modern Employee Outsourcing Solutions. ',
  description:
    'Welcome to eSpark Talent’s expert employee outsourcing services. Connect with us and find out how our IT specialists make outstaffing easy',
  keywords: ['eSpark Talent', 'eSpark Solution', 'eSpark Consultants'],
  author: 'eSpark Talent',
  canonical: 'https://esparktalent.com/',
  robots: 'index, follow',
  ogTitle: 'eSpark Talent: Get Modern Employee Outsourcing Solutions. ',
  ogDescription:
    'Welcome to eSpark Talent’s expert employee outsourcing services. Connect with us and find out how our IT specialists make outstaffing easy',
  ogUrl: 'https://esparktalent.com/',
  ogImage: {
    url: 'https://esparktalent.com/_next/image?url=%2Fimages%2Fheader%2Flogo.png&w=128&q=85',
    alt: 'eSpark Talent: Get Modern Employee Outsourcing Solutions. ',
    width: 1200,
    height: 630,
  },
  ogSiteName: 'eSpark Talent: Get Modern Employee Outsourcing Solutions.',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterSite: '@eSparkTalent',
  twitterCreator: '@eSparkConsGroup',
};
export default function RootLayout({ children }) {
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
            </ThemeProvider>
          </AppRouterCacheProvider>
        </SkeletonTheme>
      </body>
    </html>
  );
}
