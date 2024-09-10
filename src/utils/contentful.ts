import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const getAllGalleryImages = async () => {
  try {
    const response = await client.getEntries({ content_type: "gallery" });
    const { includes } = response;

    if (!includes || !includes.Asset) {
      console.warn("No assets found in the response");
      return [];
    }

    const photos = includes.Asset.map((asset) => {
      const { fields } = asset;
      if (!fields || !fields.file) {
        console.warn(`Asset ${asset.sys.id} is missing file information`);
        return null;
      }

      const { url } = fields.file;

      return {
        src: `https:${url}`,
        width: 4,
        height: 3,
      };
    }).filter((photo) => photo !== null); 

    return photos;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};


export const getAllEventPosters=async()=>{
  try {
    const response = await client.getEntries({ content_type: "events" });
    const { includes } = response;

    if (!includes || !includes.Asset) {
      console.warn("No assets found in the response");
      return [];
    }

    const photos = includes.Asset.map((asset) => {
      const { fields } = asset;
      if (!fields || !fields.file) {
        console.warn(`Asset ${asset.sys.id} is missing file information`);
        return null;
      }

      const { url } = fields.file;

      return {
        src: `https:${url}`,
        width: 4,
        height: 3,
      };
    }).filter((photo) => photo !== null); 

    return photos;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}