import { Box } from '@mui/material';
import Hero from '@/components/homepage/Hero';
import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';
import { getWiki, getWikiCategories } from '@/sanity/sanity.quries';
import WikiCards from '@/components/wiki/wikiCards';

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
