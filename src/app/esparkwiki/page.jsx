import { Box } from '@mui/material';
import Hero from '@/components/homepage/Hero';
import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';
import { getWiki, getWikiCategories } from '@/sanity/sanity.quries';
import WikiCards from '@/components/wiki/wikiCards';
import { GLOBAL_SEO } from '@/constants/test';

const pathname = '/esparkwiki';
const filteredData =
  GLOBAL_SEO.find((item) => item.path === pathname) || GLOBAL_SEO[0];

export const metadata = {
  metadataBase: new URL('https://esparktalent.com/'),
  title: filteredData?.title,
  description: filteredData?.description,
  keywords: [`eSpark Talent`, `eSpark Solution`, `eSpark Consultants`],
  author: `eSpark Talent`,
  alternates: {
    canonical: `https://esparktalent.com${filteredData?.path}`,
    languages: {
      'en-US': '/en-US',
      'en-UK': '/en-UK',
    },
  },
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
    const wiki = await getWiki();
    const wikiCategory = await getWikiCategories();

    return (
      <>
        <Hero data={WIKI_HERO_DATA} />
        <Box sx={{ background: '#3b59980f' }}>
          <WikiCards data={wiki} categories={wikiCategory} />
        </Box>
      </>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <p>Error loading data. Please try again later.</p>;
  }
}
