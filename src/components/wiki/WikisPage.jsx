'use client';

import { useState, useEffect } from 'react';
import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';
import { getWiki } from '@/sanity/sanity.quries';
import Hero from '@/components/homepage/Hero';
import WikiCards from '@/components/wiki/wikiCards';

export default function WikisPage() {
  const [wiki, setWiki] = useState(null);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const fetchedJob = await getWiki();
      setWiki(fetchedJob);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error loading data. Please try again later.');
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(async () => {
      try {
        fetchData();
      } catch (error) {
        console.error('Error refreshing Wikis:', error);
      }
    }, 600000);
    return () => clearInterval(interval);
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <>
      <Hero data={WIKI_HERO_DATA} />
      <WikiCards data={wiki} />
    </>
  );
}
