import { urls } from '@/utils/cors';

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
