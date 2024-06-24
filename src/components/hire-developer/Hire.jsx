'use client';
import React from 'react';
const HireDeveloper = React.lazy(() => import('./HireDeveloper'));
const ServiceSinglePage = React.lazy(
  () => import('../service/ServiceSinglePage')
);
const HireRemote = React.lazy(() => import('../Hire-remote/HireRemote'));

const Hire = ({ data, slug }) => {
  if (
    slug === 'hire-a-frontend-developer' ||
    slug === 'hire-a-backend-developer'
  ) {
    return <HireDeveloper data={data} />;
  } else if (slug === 'hire-remote-developers') {
    return <HireRemote data={data} />;
  } else {
    return <ServiceSinglePage data={data} />;
  }
};

export default Hire;
