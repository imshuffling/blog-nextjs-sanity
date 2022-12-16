import { client } from './sanity.client';
import imageUrlBuilder from '@sanity/image-url';

//https://www.sanity.io/docs/image-url
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export default urlFor;
