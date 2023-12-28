'use client';
import React, { useState } from 'react';

import WikiCards from '@/components/wiki/wikiCards';
import WikiFilter from '@/components/wiki/WikiFilter';
import HeroSection from '@/components/homepage/heroSection';

import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';
import { WIKIS_DATA } from '@/constants/wiki';

const page = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [...new Set(WIKIS_DATA.map((wiki) => wiki.category))];
  const filteredWikis =
    selectedCategory === null
      ? WIKIS_DATA
      : WIKIS_DATA.filter((wiki) => wiki.category === selectedCategory);

  return (
    <>
      <HeroSection data={WIKI_HERO_DATA} />
      <WikiFilter
        categories={categories}
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <WikiCards data={filteredWikis} />
    </>
  );
};

export default page;
