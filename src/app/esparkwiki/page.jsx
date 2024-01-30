// import { Box } from '@mui/material';
// import Hero from '@/components/homepage/Hero';
// import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';
// import { getWiki, getWikiCategories } from '@/sanity/sanity.quries';
// import WikiCards from '@/components/wiki/wikiCards';

// export default async function page() {
//   const wiki = await getWiki();
//   const wikiCategory = await getWikiCategories();

//   return (
//     <>
//       <Hero data={WIKI_HERO_DATA} />
//       <Box sx={{ background: '#3b59980f' }}>
//         <WikiCards data={wiki} categories={wikiCategory} />
//       </Box>
//     </>
//   );
// }

import Hero from '@/components/homepage/Hero';
import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';
import React from 'react';

const Page = () => {
  return (
    <div>
      <Hero data={WIKI_HERO_DATA} />
    </div>
  );
};

export default Page;
