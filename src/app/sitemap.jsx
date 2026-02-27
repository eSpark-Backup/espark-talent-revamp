import { urls } from '@/utils/cors';

export const dynamic = 'force-dynamic';

export default function sitemap() {
  const now = new Date().toISOString();

  return urls?.map((item) => ({
    url: item.url,
    lastModified: now,
    changeFrequency: 'weekly',
    priority:
      item.url === 'https://www.esparktalent.com/'
        ? 1
        : 0.8,
  }));
}
