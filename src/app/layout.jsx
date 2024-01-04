'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import './globals.css';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './theme';

import store from '@/redux/store';
import Header from '@/components/global/Header/Header';
import Footer from '@/components/global/footer/Footer';
import FooterCTA from '@/components/homepage/FooterCTA';
import SEO from '@/components/global/seo';

import { FOOTER_DATA } from '@/constants/global/footer';
import { FOOTER_CTA_DATA } from '@/constants/home-page/footer-cta-section';
import { usePathname } from 'next/navigation';
import { SEO_DATA } from '@/constants/global/seo';

export default function RootLayout({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const currentTheme = isDarkTheme ? darkTheme : lightTheme;
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };
  console.log(toggleTheme);

  const pathname = usePathname();
  console.log(pathname, `pathname`);
  const filterMeta = SEO_DATA?.filter((item) => item?.link == pathname);
  console.log(filterMeta, `filterMeta`);
  console.log(SEO_DATA[0], `SEO_DATA[0]`);
  return (
    <html lang="en">
      <Head>
        <Link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <SEO data={filterMeta} alter={SEO_DATA[0]} />
      </Head>
      <body>
        <Provider store={store}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={currentTheme}>
              <CssBaseline />
              <Header />
              <Box
              // toggleTheme={toggleTheme}
              >
                {children}
              </Box>
              <FooterCTA data={FOOTER_CTA_DATA} />
              <Footer data={FOOTER_DATA} />
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Provider>
      </body>
    </html>
  );
}
