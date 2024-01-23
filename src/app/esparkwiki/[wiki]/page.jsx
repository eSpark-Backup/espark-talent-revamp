import { getSingleWiki } from '@/sanity/sanity.quries';
import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';
import React from 'react';
import NotFound from '@/app/not-found';
import { WIKIS_NOT_FOUND_DATA } from '@/constants/global/notfound';

const Page = async ({ params }) => {
  if (!params || !params.wiki) {
    return <div>Error: Missing wiki parameter</div>;
  }

  const slug = params.wiki;

  if (typeof slug !== 'string' || slug.trim() === '') {
    return (
      <div>
        <NotFound data={WIKIS_NOT_FOUND_DATA} />
      </div>
    );
  }

  try {
    const wiki = await getSingleWiki(slug);

    // Validate if the fetched wiki data is in the expected format
    if (!wiki || typeof wiki !== 'object') {
      return (
        <div>
          <NotFound data={WIKIS_NOT_FOUND_DATA} />
        </div>
      );
    }

    const InnerHero = React.lazy(
      () => import('@/components/homepage/InnerHero')
    );
    const WikiSingle = React.lazy(() => import('@/components/wiki/WikiSingle'));

    return (
      <>
        <InnerHero data={WIKI_HERO_DATA} innerData={wiki} />
        <WikiSingle data={wiki} />
      </>
    );
  } catch (error) {
    console.error('Error fetching wiki data:', error);
    return (
      <div>
        <NotFound data={WIKIS_NOT_FOUND_DATA} />
      </div>
    );
  }
};

export default Page;
