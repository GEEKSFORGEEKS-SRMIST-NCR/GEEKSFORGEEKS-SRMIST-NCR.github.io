import { Asset, createClient, EntrySkeletonType } from "contentful";

interface IPerformerFields {
  name: string;
  position: string;
  image: Asset;
}

interface IPerformer extends EntrySkeletonType {
  fields: IPerformerFields;
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const getPotwData = async () => {
  try {
    const response = await client.getEntries<IPerformer>({
      content_type: "performerOfTheWeek",
    });

    if (!response.items || response.items.length === 0) {
      console.warn("No entries found in the response");
      return [];
    }

    // Extract the first item since POTW is typically a single entry
    const performer = response.items[0].fields as IPerformerFields; 
    return {
      name: performer.name || "Coming Soon", 
      position: performer.position || "Stay Tuned", 
      img: `https:${performer.image?.fields?.file.url}`,
      links: {}, 
      id: response.items[0].sys.id, 
    };
  } catch (error) {
    console.error("Error fetching performer of the week:", error);
    return null;
  }
};

export const getBannerData = async () => {
  const response = await client.getEntries({
    content_type: "announcementBanner",
  });
  return response.items;
};

export const getAllGalleryImages = async () => {
  try {
    const response = await client.getEntries({ content_type: "gallery" });
    const { includes } = response ;

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

      const { url } = fields.file  ;
      const { width, height } = fields.file.details.image ;

      return {
        src: `https:${url}`,
        width,
        height,
      };
    }).filter((photo) => photo !== null);

    return photos;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};

export const getAllEventPosters = async () => {
  try {
    const response = await client.getEntries({
      content_type: "events",
      order: ["-fields.order"],
    });

    if (!response.items || response.items.length === 0) {
      console.warn("No entries found in the response");
      return [];
    }

    const posters = response.items
      .map((item, index) => {
        const asset = item.fields.eventPosters
          ? item.fields.eventPosters[0]
          : null;

        if (!asset) {
          console.warn(`No asset found for item ${index}`);
          return null;
        }

        return {
          key: index,
          title: asset.fields.title,
          desc: asset.fields.description,
          img: asset.fields.file ? `https:${asset.fields.file.url}` : null,
          order: item.fields.order,
        };
      })
      .filter((poster) => poster !== null);

    return posters;
  } catch (error) {
    // console.error("Error fetching images:", error);
    return [];
  }
};

export const getActiveEventPoster = async () => {
  try {
    const response = await client.getEntries({
      content_type: "currentEvent",
    });

    const { includes } = response;

    if (!includes || !includes.Asset) {
      console.warn("No assets found in the response");
      return [];
    }
    const currentposter = includes.Asset.map((asset) => {
      return {
        title: asset.fields.title,
        desc: asset.fields.description,
        img: asset.fields.file ? `https:${asset.fields.file.url}` : null,
      };
    });

    return currentposter;
  } catch (error) {
    return null;
  }
};
