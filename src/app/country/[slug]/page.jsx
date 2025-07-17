import React from 'react';
import CountryPage from '@/components/country/CountryPage';
import NotFoundPage from '@/components/global/NotFound';
import { NOT_FOUND_DATA } from '@/constants/global/notfound';
import { GLOBAL_SEO } from '@/constants/seo-data';
import { getSingleCountry } from '@/sanity/sanity.quries';
import { getCountryMetadata } from '@/components/global/seo';

const countryModules = {
  oman: () => import('@/constants/country/oman'),
  uae: () => import('@/constants/country/uae'),
  uk: () => import('@/constants/country/uk'),
  usa: () => import('@/constants/country/usa'),
  canada: () => import('@/constants/country/canada'),
  qatar: () => import('@/constants/country/qatar'),
  malaysia: () => import('@/constants/country/malaysia'),
  ksa: () => import('@/constants/country/ksa'),
};
export async function generateMetadata({ params }) {
  const slug = params.slug;
  const country = await getSingleCountry(slug);
  const filteredData = country || GLOBAL_SEO[0];
  return getCountryMetadata(filteredData);
}

export default async function Page({ params }) {
  const { slug } = await params;
  const loader = countryModules[slug];

  if (!loader) {
    return <NotFoundPage data={NOT_FOUND_DATA} />;
  }

  const load = await loader();
  const data = load.default;

  return <CountryPage data={data} />;
}
