import React from 'react';
import { getSingleWiki } from '@/sanity/sanity.quries';
import NotFoundPage from '@/components/global/NotFound';
import { WIKIS_NOT_FOUND_DATA } from '@/constants/global/notfound';
import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';

const Page = async ({ params }) => {
  if (!params || !params.wiki) {
    return (
      <div>
        <NotFoundPage data={WIKIS_NOT_FOUND_DATA} />
      </div>
    );
  }

  const slug = params.wiki;

  if (typeof slug !== 'string' || slug.trim() === '') {
    return (
      <div>
        <NotFoundPage data={WIKIS_NOT_FOUND_DATA} />
      </div>
    );
  }

  try {
    const wiki = await getSingleWiki(slug);

    if (!wiki || typeof wiki !== 'object') {
      return (
        <div>
          <NotFoundPage data={WIKIS_NOT_FOUND_DATA} />
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
        <NotFoundPage data={WIKIS_NOT_FOUND_DATA} />
      </div>
    );
  }
};

export default Page;
