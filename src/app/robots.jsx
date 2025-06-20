const robots = () => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://www.esparktalent.com/sitemap.xml',
  };
};

export default robots;
