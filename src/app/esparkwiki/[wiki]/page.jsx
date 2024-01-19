import Image from 'next/image';
import { Metadata } from 'next';
import { PortableText } from '@portabletext/react';
import { getSingleWiki } from '@/sanity/sanity.quries';
import InnerHero from '@/components/homepage/InnerHero';
import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';
import WikiSingle from '@/components/wiki/WikiSingle';

const Page = async ({ params }) => {
  const slug = params?.wiki;
  const wiki = await getSingleWiki(slug);
  return (
    <>
      <InnerHero data={WIKI_HERO_DATA} innerData={wiki} />
      <WikiSingle data={wiki} />
    </>
  );
};

// export async function generateMetadata({ params }) {
//   const slug = params?.wiki;
//   const wiki = await getSingleWiki(slug);

//   return {
//     title: `${wiki?.name} | Project`,
//     description: wiki?.tagline,
//     openGraph: {
//       images:
//         wiki?.coverImage?.image ||
//         "https://res?.cloudinary?.com/victoreke/image/upload/v1689892912/docs/wiki?.png",
//       title: wiki?.name,
//       description: wiki?.tagline,
//     },
//   };
// }

export default Page;
