import client from "./sanity.config";

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
export async function getSingleProject(slug) {
    return client.fetch(`
    *[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      projectUrl,
      coverImage { alt, "image": asset->url },
      tagline,
      description
    }
  `, { slug });
}

export async function getProjects() {
    return client.fetch(`
    *[_type == "project"]
  `);
}

