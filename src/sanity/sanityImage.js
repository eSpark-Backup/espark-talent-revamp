import imageUrlBuilder from '@sanity/image-url';

export const builder = imageUrlBuilder({
    projectId: '93d1bm1e',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
});

export function urlFor(source) {
    return builder.image(source);
}
