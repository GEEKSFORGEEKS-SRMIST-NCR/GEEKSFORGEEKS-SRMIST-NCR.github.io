import { cache } from 'react';

import { Asset, createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});


export const getAllImages = cache(async () => {
  try {
    const { items } = await client.getEntries({
      content_type: 'images',
      order: ['fields.index'],
      select: ['fields.name', 'fields.slug', 'fields.tags', 'fields.image']
    });

    const projects = await Promise.all(
      items.map(async ({ fields }) => {
        const image = fields?.image as Asset<undefined, string>;
        const imgSrc = image ? `https:${image?.fields?.file?.url}` : '';
        const imgBase64 = '';

        return {
          name: fields.name,
          slug: fields.slug,
          tags: fields.tags,
          image: {
            src: imgSrc,
            alt: image ? image.fields?.description : fields.name,
            base64: imgBase64
          }
        };
      })
    );

    return projects;
  } catch (error) {
    console.error(error);
  }
});
