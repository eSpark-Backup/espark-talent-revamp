'use client';
import React, { useState } from 'react';

import { Container, CardContent, Typography, Button, Box, Grid } from '@mui/material';
import HeroSection from '@/components/homepage/heroSection';
import { HP_HERO_DATA } from '@/constants/global/hero-sections';
import { WIKIS_DATA } from '@/constants/wiki';
import WikiCards from '@/components/wiki/wikiCards';
import WikisFilter from '@/utils/wikisFilter';

const page = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [...new Set(WIKIS_DATA.map((wiki) => wiki.category))];
  const filteredWikis =
    selectedCategory === null
      ? WIKIS_DATA
      : WIKIS_DATA.filter((wiki) => wiki.category === selectedCategory);

  return (
    <>
        <HeroSection data={HP_HERO_DATA} />
        <WikisFilter
          categories={categories}
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        />
        <WikiCards data={filteredWikis} />
    </>
  );
};

export default page;
