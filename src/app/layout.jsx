'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import './globals.css';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

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
  const [isDarkTheme, setIsDarkTheme] = useState(lightTheme);
  const currentTheme = isDarkTheme ? darkTheme : lightTheme;
  const pathName = usePathname();
  const bookADemo = '/book-a-demo';
  const careers = '/careers';
  const partnership = '/partnership-program';

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };
  console.log(toggleTheme);

  const filterMeta = SEO_DATA?.filter((item) => item?.link == pathName);

  return (
    <html lang="en">
      <Head>
        <SEO data={filterMeta} alter={SEO_DATA[0]} />
      </Head>
      <body>
        <Provider store={store}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={currentTheme}>
              <CssBaseline />
              {pathName !== bookADemo ? <Header /> : null}
              <Box>{children}</Box>
              {pathName !== bookADemo ? (
                <>
                  {pathName !== careers && pathName !== partnership ? (
                    <FooterCTA data={FOOTER_CTA_DATA} />
                  ) : null}
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
