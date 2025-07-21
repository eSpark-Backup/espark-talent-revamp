import { useEffect, useState } from 'react';
import { getSingleWiki } from '@/sanity/sanity.quries';
import InnerHero from '@/components/homepage/InnerHero';
import WikiSingle from '@/components/wiki/WikiSingle';
import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';

const WikiPage = ({ params }) => {
  const [wiki, setWiki] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWikiData = async () => {
      try {
        const slug = params.wiki;
        const wikiData = await getSingleWiki(slug);
        setWiki(wikiData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      }
    };
    fetchWikiData();

    const intervalId = setInterval(fetchWikiData, 600000);

    return () => clearInterval(intervalId);
  }, [params.wiki]);

  return (
    <div>
      {error ? (
        <p>Error loading data. Please try again later.</p>
      ) : (
        <>
          <InnerHero data={WIKI_HERO_DATA} innerData={wiki} />
          <WikiSingle data={wiki} />
        </>
      )}
    </div>
  );
};

export default WikiPage;
