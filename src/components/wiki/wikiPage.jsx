import { getSingleWiki } from '@/sanity/sanity.quries';
import InnerHero from '@/components/homepage/InnerHero';
import WikiSingle from '@/components/wiki/WikiSingle';
import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';

const WikiPage = async ({ params }) => {
  const slug = params.wiki;
  const wiki = await getSingleWiki(slug);

  return (
    <>
      <InnerHero data={WIKI_HERO_DATA} innerData={wiki} />
      <WikiSingle data={wiki} />
    </>
  );
};

export default WikiPage;
