import Head from 'next/head';
import { Divider, Flex, Heading } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';

import { Header } from '../components/Header';
import TravelTypes from '../components/TravelTypes';
import { Slider } from '../components/Slider';
import { getPrismicClient } from '../services/prismic';

interface HomeProps {
  continents: {
    slug: string;
    title: string;
    summary: string;
    banner: string;
    slider_image: string;
  }[],
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Head>
        <title>WorldTrip - Home</title>
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta property="og:title" content="WorldTrip" />
        <meta name="twitter:title" content="WorldTrip" />
      </Head>

      <Flex
        w="100%"
        h="100%"
        align="center"
        flexDir="column"

      >

        <Header />

        <TravelTypes />

        <Divider w={['60px', '90px']} mt="16" p="2px" bg="gray.400" orientation="horizontal" />

        <Heading
          textAlign="center"
          fontWeight="500"
          my={['5', '14']}
          fontSize={['lg', '3xl', '4xl']}
        >
          Vamos nessa?<br />Então escolha seu continente
        </Heading>

        <Slider continents={continents} />

      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'continent')],
    { pageSize: 20 },
  );

  const continents = response.results.map((continent) => ({
    slug: continent.uid,
    title: continent.data.title,
    summary: continent.data.summary,
    slider_image: continent.data.slider_image.url,
  }));

  return {
    props: {
      continents,
    },
  };
};
