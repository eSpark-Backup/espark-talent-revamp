import React from 'react';
import './globals.css';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import theme from './theme';
import { FOOTER_DATA } from '@/constants/global/footer';
import { SkeletonTheme } from 'react-loading-skeleton';
import { GoogleTagManager } from '@next/third-parties/google';
import { GLOBAL_SEO } from '@/constants/seo/seo-data';
import { getPageSeo } from '@/sanity/sanity.quries';
import GoogleTag from '@/components/global/Header/GoogleTag';
import AllpagesHeader from '@/components/global/Navbar/AllpagesHeader';
import ToastProvider from '@/components/global/ToastContainer';
import { getMetadata } from '@/components/global/seo';
import Loading from '@/components/global/loading';

const Footer = dynamic(() => import('@/components/global/footer/Footer'), {
  ssr: false,
});
export const revalidate = 1800;

const pathname = '/';
const seo = await getPageSeo();
const filteredData =
  seo?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];

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
