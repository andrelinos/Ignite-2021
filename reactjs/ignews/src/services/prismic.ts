import Prismic from '@prismicio/client';

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(
    process.env.NEXT_PRISMIC_ENDPOINT,
    {
      req,
      accessToken: process.env.NEXT_PRISMIC_ACCESS_TOKEN,
    },
  );

  return prismic;
}
