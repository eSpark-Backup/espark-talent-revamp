import React from 'react';
import CountryPage from '@/components/country/CountryPage';
import NotFoundPage from '@/components/global/NotFound';
import { NOT_FOUND_DATA } from '@/constants/global/notfound';

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

export default async function Page({ params }) {
  const { slug } = await params;
  const loader = countryModules[slug];

  if (!loader) {
    return <NotFoundPage data={NOT_FOUND_DATA} />;
  }

  const module = await loader();
  const data = module.default;

  return <CountryPage data={data} />;
}
