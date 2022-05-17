import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId : '2obg2pix',
    dataset : 'production',
    apiVersion : '2022-05-14',
    useCdn : true,
    token : process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (src) => builder.image(src);