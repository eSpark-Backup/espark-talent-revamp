'use client';
import React from 'react';
import './globals.css';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
// import dynamic from 'next/dynamic';
import theme from './theme';
import { FOOTER_DATA } from '@/constants/global/footer';
import { FOOTER_CTA_DATA } from '@/constants/home-page/footer-cta-section';
import { SkeletonTheme } from 'react-loading-skeleton';
import Header from '@/components/global/Header/Header';
import FooterCTA from '@/components/homepage/FooterCTA';
import Footer from '@/components/global/footer/Footer';

// Dynamically import components that should not be server-rendered
// const Header = dynamic(() => import('@/components/global/Header/Header'), {
//   ssr: false,
// });

// const FooterCTA = dynamic(() => import('@/components/homepage/FooterCTA'), {
//   ssr: false,
// });

// const Footer = dynamic(() => import('@/components/global/footer/Footer'), {
//   ssr: false,
// });

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
            </ThemeProvider>
          </AppRouterCacheProvider>
        </SkeletonTheme>
      </body>
    </html>
  );
}
