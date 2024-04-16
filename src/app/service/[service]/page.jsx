import React from 'react';
import PropTypes from 'prop-types';
import { SERVICE_SEO } from '@/constants/seo-data';
import { SERVICE_NOT_FOUND_DATA } from '@/constants/global/notfound';
import { SERVICES_DATA } from '@/constants/services/services';
import NotFoundPage from '@/components/global/NotFound';
import ServiceSinglePage from '@/components/service/ServiceSinglePage';

export async function generateMetadata({ params }) {
  const slug = params.service;
  const filteredData =
    SERVICE_SEO.find((item) => item.path === slug) || SERVICE_SEO[0];
  const metadata = {
    metadataBase: new URL('https://www.esparktalent.com/'),
    title: filteredData?.title,
    description: filteredData?.description,
    keywords: [`eSpark Talent`, `eSpark Solution`, `eSpark Consultants`],
    author: `eSpark Talent`,
    alternates: {
      canonical: `https://www.esparktalent.com/service/${filteredData?.path}`,
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
  const slug = params.service;
  const data = SERVICES_DATA?.filter((item) => item?.path === slug)[0];
  if (!params || !params.service) {
    return (
      <div>
        <NotFoundPage data={SERVICE_NOT_FOUND_DATA} />
      </div>
    );
  }
  try {
    if (!data) {
      return <NotFoundPage data={SERVICE_NOT_FOUND_DATA} />;
    }
    return (
      <>
        <ServiceSinglePage data={data} />
      </>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div>
        <NotFoundPage data={SERVICE_NOT_FOUND_DATA} />
      </div>
    );
  }
};

Page.propTypes = {
  params: PropTypes.object.isRequired,
};

export default Page;
