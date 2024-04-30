'use client';
import React from 'react';
import HireDeveloper from './HireDeveloper';
import ServiceSinglePage from '../service/ServiceSinglePage';

const Hire = ({ data, slug }) => {
  if (
    slug === 'hire-a-frontend-developer' ||
    slug === 'hire-a-backend-developer'
  ) {
    return <HireDeveloper data={data} />;
  } else {
    return <ServiceSinglePage data={data} />;
  }
};

export default Hire;
