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
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
