'use client';
import React, { Suspense, useEffect } from 'react';
import Head from 'next/head';
import './globals.css';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import store from '@/redux/store';
import theme from './theme';
import { FOOTER_DATA } from '@/constants/global/footer';
import { FOOTER_CTA_DATA } from '@/constants/home-page/footer-cta-section';
import { SEO_DATA } from '@/constants/global/seo';
import Loading from '@/components/global/loading';
import SEO from '@/components/global/SEO';

// Dynamically import components that should not be server-rendered
const Header = dynamic(() => import('@/components/global/Header/Header'), {
  ssr: false,
});

const FooterCTA = dynamic(() => import('@/components/homepage/FooterCTA'), {
  ssr: false,
});

const Footer = dynamic(() => import('@/components/global/footer/Footer'), {
  ssr: false,
});

export default function RootLayout({ children }) {
  const pathName = usePathname();

  useEffect(() => {}, []);
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {/* Conditionally render Header based on pathName */}
              {pathName !== '/book-a-demo' && <Header />}
              <Box>{children}</Box>
              {/* Conditionally render FooterCTA and Footer based on pathName */}
              {pathName !== '/book-a-demo' &&
                pathName !== '/careers' &&
                pathName !== '/partnership-program' && (
                  <FooterCTA data={FOOTER_CTA_DATA} />
                )}
              {pathName !== '/book-a-demo' &&
                pathName !== '/careers' &&
                pathName !== '/partnership-program' && (
                  <Footer data={FOOTER_DATA} />
                )}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Provider>
      </body>
    </html>
  );
}
