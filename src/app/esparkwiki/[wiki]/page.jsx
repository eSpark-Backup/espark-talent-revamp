// import React from 'react';

// import { usePathname } from 'next/navigation';

// import WikiSingle from '@/components/wiki/WikiSingle';
// import InnerHero from '@/components/homepage/InnerHero';
// import NotFound from '@/app/not-found';

// import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';
// import { WIKIS_DATA } from '@/constants/wiki';
// import { WIKIS_NOT_FOUND_DATA } from '@/constants/global/notfound';
// import { getSingleWiki, getWiki } from '@/sanity/sanity.quries';

// export default async function Page() {
//   const SINGLE_WIKI_DATA = await getSingleWiki();
  
//   const pathname = usePathname();
//   const segments = pathname.split('/');
//   const lastSegment = segments[segments.length - 1];
//   let data;
//   if (!isNaN(lastSegment)) {
//     const id = parseInt(lastSegment, 10);
//     data = WIKI_DATA?.filter((item) => item?.id === id);
//   } else {
//     data = WIKI_DATA?.filter((item) => item?.slug === lastSegment);
//   }
//   if (data?.length === 0) {
//     return <NotFound data={WIKIS_NOT_FOUND_DATA} />;
//   }
//   return (
//     <>
//       <InnerHero data={WIKI_HERO_DATA} innerData={data} />
//       <WikiSingle data={data} />
//     </>
//   );
// };
import Image from "next/image";
import { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import { getSingleWiki } from "@/sanity/sanity.quries";
import InnerHero from "@/components/homepage/InnerHero";
import { WIKI_HERO_DATA } from "@/constants/global/hero-sections";
import WikiSingle from "@/components/wiki/WikiSingle";

const Page = async ({ params }) => {
  const slug = params?.wiki;
  const wiki = await getSingleWiki(slug);
  return (<>{wiki.title}
   
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
