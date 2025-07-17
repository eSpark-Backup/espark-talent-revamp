import React from 'react';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { SkeletonTheme } from 'react-loading-skeleton';
import ToastProvider from './ToastContainer';
import GoogleTag from './Header/GoogleTag';
import { GoogleTagManager } from '@next/third-parties/google';
import FooterClient from './footer/FooterClient';
import AllpagesHeader from './Navbar/AllpagesHeader';
import Loading from './loading';
import theme from '@/app/theme';
import { FOOTER_DATA } from '@/constants/global/footer';

export default function ClientLayout({ children }) {
  return (
    <div>
      <SkeletonTheme baseColor="#000" highlightColor="#000">
        <AppRouterCacheProvider>
          <ToastProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Loading>
                <AllpagesHeader />
                {children}
                <FooterClient data={FOOTER_DATA} />
                <GoogleTagManager gtmId="GTM-5JWLG8J2" />
                <GoogleTagManager gtmId="G-N43EVHZHXM" />
                <GoogleTag gtmId="G-N43EVHZHXM" />
              </Loading>
            </ThemeProvider>
          </ToastProvider>
        </AppRouterCacheProvider>
      </SkeletonTheme>
    </div>
  );
}
