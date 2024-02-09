import CareerCards from '@/components/careers/CareerCards';
import Hero from '@/components/homepage/Hero';
import { JOBS_HERO_DATA } from '@/constants/global/hero-sections';
import { GLOBAL_SEO } from '@/constants/test';
import { getJob, getJobCategories } from '@/sanity/sanity.quries';

const pathname = '/careers';
const filteredData =
  GLOBAL_SEO.find((item) => item.path === pathname) || GLOBAL_SEO[0];

export const metadata = {
  metadataBase: new URL('https://esparktalent.com/'),
  title: filteredData?.title,
  description: filteredData?.description,
  keywords: [`eSpark Talent`, `eSpark Solution`, `eSpark Consultants`],
  author: `eSpark Talent`,
  canonical: `https://esparktalent.com${filteredData?.path}`,
  robots: `index, follow`,
  openGraph: {
    metadataBase: new URL('https://esparktalent.com/'),
    title: filteredData?.title,
    description: filteredData?.description,
    type: 'article',
    publishedTime: '2023-01-01T00:00:00.000Z',
    authors: ['eSpark Talent', 'Mehdi Raza'],
    siteName: `eSpark Talent: Get Modern Employee Outsourcing Solutions.`,
    locale: `en_US`,
    images: [
      {
        url: filteredData?.image,
        alt: filteredData?.title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: `summary_large_image`,
    metadataBase: new URL('https://esparktalent.com/'),
    title: filteredData?.title,
    description: filteredData?.description,
    siteId: `@eSparkTalent`,
    creator: `@eSparkTalent`,
    images: [`${filteredData?.image}`],
  },
};

export default async function page() {
  try {
    const job = await getJob();
    const jobCategory = await getJobCategories();

    return (
      <>
        <Hero data={JOBS_HERO_DATA} />
        <CareerCards data={job} categories={jobCategory} />
      </>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <p>Error loading data. Please try again later.</p>;
  }
}
