import './globals.css';

import dynamic from 'next/dynamic';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { SkeletonTheme } from 'react-loading-skeleton';
import { GoogleTagManager } from '@next/third-parties/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import theme from '@/app/theme';

import GoogleTag from '@/components/global/header/GoogleTag';
import AllpagesHeader from '@/components/global/navbar/AllpagesHeader';
import Loading from '@/components/global/loading';
import ToastProvider from '@/components/global/ToastContainer';
import { getMetadata } from '@/components/global/seo';

import { FOOTER_DATA } from '@/constants/global/footer';
import { FOOTER_CTA_DATA } from '@/constants/home-page/footer-cta-section';

import { getFilteredData } from '@/utils/cors';

// Dynamically import components that should not be server-rendered
const FooterCTA = dynamic(() => import('@/components/homepage/FooterCTA'), {
  ssr: false, // Disable server-side rendering for this component
});

const Footer = dynamic(() => import('@/components/global/footer/Footer'), {
  ssr: false, // Disable server-side rendering for this component
});

// Revalidate the page every 1800 seconds (30 minutes)
export const revalidate = 1800;

// Define the pathname for filtering data
const pathname = '/';
const filteredData = getFilteredData(pathname); // Fetch filtered data based on the pathname

// Generate metadata for the page

/**
 * Metadata for this page.
 *
 * This export retrieves metadata using the `getMetadata` function
 * with the provided `filteredData` as input.
 *
 * @constant {Object} metadata - The metadata object for the page.
 */
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
