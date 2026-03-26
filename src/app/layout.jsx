import Script from 'next/script';
import { getPageSeo } from '@/sanity/sanity.quries';
import { getMetadata } from '@/components/global/seo';
import ClientLayout from '@/components/global/ClientLayout';
import { GLOBAL_SEO } from '@/constants/seo-data';
import './globals.css';

const pathname = '/';
const seo = await getPageSeo();
const filteredData =
  seo?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];

export const metadata = getMetadata(filteredData);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtag-js"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ZM366HK90P"
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZM366HK90P');
            `,
          }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
