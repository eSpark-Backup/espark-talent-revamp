'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import './globals.css';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {Inter,Poppins} from 'next/font/google'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './theme';
import { usePathname } from 'next/navigation';

import store from '@/redux/store';
import Header from '@/components/global/Header/Header';
import Footer from '@/components/global/footer/Footer';
import FooterCTA from '@/components/homepage/FooterCTA';
import SEO from '@/components/global/SEO';

import { FOOTER_DATA } from '@/constants/global/footer';
import { FOOTER_CTA_DATA } from '@/constants/home-page/footer-cta-section';
import { SEO_DATA } from '@/constants/global/seo';

export default function RootLayout({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const currentTheme = isDarkTheme ? darkTheme : lightTheme;
  const pathName = usePathname();
  const bookADemo = '/book-a-demo';

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };
  console.log(toggleTheme);

  const filterMeta = SEO_DATA?.filter((item) => item?.link == pathName);
  console.log(filterMeta, `filterMeta`);
  console.log(SEO_DATA[0], `SEO_DATA[0]`);

  return (
    <html lang="en">
      <Head>
        <Link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/> */}
        <SEO data={filterMeta} alter={SEO_DATA[0]} />
      </Head>
      <body>
        <Provider store={store}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={currentTheme}>
              <CssBaseline />
              {pathName !== bookADemo ? <Header /> : null}
              <Box
              // toggleTheme={toggleTheme}
              >
                {children}
              </Box>
              {pathName !== bookADemo ? (
                <>
                  <FooterCTA data={FOOTER_CTA_DATA} />
                  <Footer data={FOOTER_DATA} />
                </>
              ) : null}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Provider>
      </body>
    </html>
  );
}
