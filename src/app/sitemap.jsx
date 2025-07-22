import { getBlog, getHire, getPageSeo, getWiki } from '@/sanity/sanity.quries';

export const urlsPromise = (async () => {
  const blogs = await getBlog();
  const hires = await getHire();
  const pages = await getPageSeo();
  const wikis = await getWiki();
  return [...pages, ...wikis, ...hires, ...blogs];
})();

const urls = await urlsPromise;

export default function sitemap() {
  const today = new Date();
  const formattedDate = today.toISOString().replace(/\.\d{3}Z$/, '+00:00');

  return urls?.map((item) => ({
    url: item.url,
    lastModified: formattedDate,
    changeFrequency: 'weekly',
    priority: item.url === 'https://www.esparktalent.com/' ? 1 : 0.8,
  }));
}
