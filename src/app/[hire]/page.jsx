import React from 'react';
import PropTypes from 'prop-types';
import { HIRE_SEO, GLOBAL_SEO } from '@/constants/seo-data';
import { HIRES_NOT_FOUND_DATA } from '@/constants/global/notfound';
import NotFoundPage from '@/components/global/NotFound';
import HireAFrontendDeveloper from '@/components/hire-a-frontend-developer/HireAFrontendDeveloper';
import { HIRE_FRONTEND_DEVELOPER } from '@/constants/hire-a-frontend-developer/hire-a-frontend-developer';

export async function generateMetadata({ params }) {
  const slug = params.hire;
  const filteredData =
    HIRE_SEO.find((item) => item.path === slug) || GLOBAL_SEO[0];
  const metadata = {
    metadataBase: new URL('https://www.esparktalent.com/'),
    title: filteredData?.title,
    description: filteredData?.description,
    keywords: [`eSpark Talent`, `eSpark Solution`, `eSpark Consultants`],
    author: `eSpark Talent`,
    alternates: {
      canonical: `https://www.esparktalent.com/blogs/${filteredData?.path}`,
      languages: {
        'en-US': '/en-US',
        'en-UK': '/en-UK',
      },
    },
    robots: `index, follow`,
    openGraph: {
      metadataBase: new URL('https://www.esparktalent.com/'),
      title: filteredData?.title,
      description: filteredData?.description,
      type: 'article',
      publishedTime: '2023-01-01T00:00:00.000Z',
      authors: ['eSpark Talent', 'Mehdi Raza'],
      siteName: `eSpark Talent: Get Modern Employee Outsourcing Solutions.`,
      locale: `en_US`,
      images: [
        {
          url: filteredData?.image,
          alt: filteredData?.title,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: `summary_large_image`,
      metadataBase: new URL('https://www.esparktalent.com/'),
      title: filteredData?.title,
      description: filteredData?.description,
      siteId: `@eSparkTalent`,
      creator: `@eSparkTalent`,
      images: [`${filteredData?.image}`],
    },
  };

  return metadata;
}

const Page = async ({ params }) => {
  const slug = params.hire;
  const data = HIRE_FRONTEND_DEVELOPER?.filter((item) => item?.path === slug)[0];
  if (!params || !params.hire) {
    return (
      <div>
        <NotFoundPage data={HIRES_NOT_FOUND_DATA} />
      </div>
    );
  }
  try {
    if (!data) {
      return <NotFoundPage data={HIRES_NOT_FOUND_DATA} />;
    }
    return (
      <>
          <HireAFrontendDeveloper  data={data}/>
      </>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div>
        <NotFoundPage data={HIRES_NOT_FOUND_DATA} />
      </div>
    );
  }
};

Page.propTypes = {
  params: PropTypes.object.isRequired,
};

export default Page;
