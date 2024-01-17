// 'use client';
// import React, { useState } from 'react';
import { Box } from '@mui/material';

// import Hero from '@/components/homepage/Hero';
// import WikiCards from '@/components/wiki/wikiCards';
// import WikiFilter from '@/components/wiki/WikiFilter';

// import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';
// import { WIKIS_DATA } from '@/constants/wiki';

// const WikiMainPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const categories = Array.from(
//     new Set(WIKIS_DATA.map((wiki) => wiki.category))
//   );

//   const filteredWikis =
//     selectedCategory === null
//       ? WIKIS_DATA
//       : WIKIS_DATA.filter((wiki) => wiki.category === selectedCategory);

//   return (
//     <>
//       <Hero data={WIKI_HERO_DATA} />
//       <Box sx={{ background: '#3b59980f' }}>
//         <WikiFilter
//           categories={categories}
//           onSelectCategory={setSelectedCategory}
//           selectedCategory={selectedCategory}
//         />
//         <Box sx={{ px: ['0%', '0%', '10%', '10%'] }}>
//
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default WikiMainPage;

// import React from 'react';

import CareerCards from '@/components/careers/CareerCards';
import Hero from '@/components/homepage/Hero';
import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';
import {
  getBlog,
  getBlogCategories,
  getJob,
  getJobCategories,
  getWiki,
  getWikiCategories,
} from '@/sanity/sanity.quries';
import WikiCards from '@/components/wiki/wikiCards';
// import WikiFilter from '@/components/wiki/WikiFilter';

export default async function page() {
  const job = await getJob();
  const jobCategory = await getJobCategories();
  const wiki = await getWiki();
  const wikiCategory = await getWikiCategories();
  const blogs = await getBlog();
  // const blogs = await getBlogCategories();

  return (
    <>
      <Hero data={WIKI_HERO_DATA} />
      <Box sx={{ background: '#3b59980f' }}>
        <WikiCards data={wiki} categories={wikiCategory} job={blogs} />
      </Box>
    </>
  );
}
