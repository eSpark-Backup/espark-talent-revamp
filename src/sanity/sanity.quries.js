import client from './sanity.config';

export async function getJob() {
  return client.fetch(`
    *[_type == "job"]
  `);
}
export async function getJobCategories() {
  return client.fetch(`
    *[_type == "jobCategory"]
  `);
}

export async function getBlog() {
  return client.fetch(`
    *[_type == "blog"]
  `);
}
export async function getBlogCategories() {
  return client.fetch(`
    *[_type == "jobCategory"]
  `);
}

export async function getWiki() {
  return client.fetch(`
    *[_type == "wiki"]
  `);
}
export async function getWikiCategories() {
  return client.fetch(`
    *[_type == "wikiCategory"]
  `);
}

export async function getPageSeo() {
  return client.fetch(`
    *[_type == "pageSEO"]
  `);
}
export async function getAuthor() {
  return client.fetch(`
    *[_type == "author"]
  `);
}
