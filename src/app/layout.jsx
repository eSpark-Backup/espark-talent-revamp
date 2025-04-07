import React from 'react';
import './globals.css';
import CssBaseline from '@mui/material/CssBaseline';
import dynamic from 'next/dynamic';
import theme from './theme';
import GoogleTag from '@/components/global/Header/GoogleTag';
import AllpagesHeader from '@/components/global/Navbar/AllpagesHeader';
import Loading from '@/components/global/loading';
import ToastProvider from '@/components/global/ToastContainer';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { FOOTER_DATA } from '@/constants/global/footer';
import { FOOTER_CTA_DATA } from '@/constants/home-page/footer-cta-section';
import { SkeletonTheme } from 'react-loading-skeleton';
import { GoogleTagManager } from '@next/third-parties/google';
import { getMetadata } from '@/components/global/seo';
import { getFilteredData } from '@/utils/cors';

// Dynamically import components that should not be server-rendered
const FooterCTA = dynamic(() => import('@/components/homepage/FooterCTA'), {
  ssr: false,
});

const Footer = dynamic(() => import('@/components/global/footer/Footer'), {
  ssr: false,
});

export const revalidate = 1800;

const pathname = '/';
const filteredData = getFilteredData(pathname);
export const metadata = getMetadata(filteredData);

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SkeletonTheme baseColor="#000" highlightColor="#000">
          <AppRouterCacheProvider>
            <ToastProvider>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <Loading>
                  <AllpagesHeader />
                  {children}
                  <FooterCTA data={FOOTER_CTA_DATA} />
                  <Footer data={FOOTER_DATA} />
                  <GoogleTagManager gtmId="GTM-5JWLG8J2" />
                  <GoogleTagManager gtmId="G-N43EVHZHXM" />
                  <GoogleTag gtmId="G-N43EVHZHXM" />
                </Loading>
              </ThemeProvider>
            </ToastProvider>
          </AppRouterCacheProvider>
        </SkeletonTheme>
      </body>
    </html>
  );
}
