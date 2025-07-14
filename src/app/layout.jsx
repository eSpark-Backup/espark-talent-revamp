import './globals.css';
import { Poppins } from 'next/font/google';
import { getPageSeo } from '@/sanity/sanity.quries';
import { getMetadata } from '@/components/global/seo';
import { GLOBAL_SEO } from '@/constants/seo-data';
import ClientLayout from '@/components/global/ClientLayout';

export const revalidate = 1800;

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const pathname = '/';
const seo = await getPageSeo();
const filteredData =
  seo?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];

export const metadata = getMetadata(filteredData);

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins?.className}>
      <head>
        <link
          rel="preload"
          href="/fonts/your-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
