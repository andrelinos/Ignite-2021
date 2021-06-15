import { Grid, Text, Image } from '@chakra-ui/react';

import Infos from './Info';

interface ContinentProps {
  continent: {
    banner: string;
    description: string;
  }
}

export default function Content({ continent }:ContinentProps) {
  return (
    <Grid
      templateColumns={['1fr', '1fr', '1fr 1fr', '1.2fr 1fr']}
      gap={[5, 10, 16, 20]}
      my={['8', '20']}
    >
      <Text
        fontSize={['lg', 'xl', 'xl', '2xl']}
        color="gray.700"
        textAlign="justify"
      >
        <Image src={continent.banner} />
        {continent.description}
      </Text>
      <Infos continent={continent} />
    </Grid>
  );
}
