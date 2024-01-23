'use client';
import React from 'react';
import './globals.css';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import store from '@/redux/store';
import theme from './theme';
import { FOOTER_DATA } from '@/constants/global/footer';
import { FOOTER_CTA_DATA } from '@/constants/home-page/footer-cta-section';

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
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Header />
              <Box>{children}</Box>
              <FooterCTA data={FOOTER_CTA_DATA} />
              <Footer data={FOOTER_DATA} />
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Provider>
      </body>
    </html>
  );
}
