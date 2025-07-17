'use client';

import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('./Footer'), { ssr: false });

const FooterClient = ({ data }) => {
  return <Footer data={data} />;
};

export default FooterClient;
