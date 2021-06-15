import { Grid, GridItem } from '@chakra-ui/react';
import TravelType from './TravelType';

export default function TravelTypes() {
  return (
    <Grid
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      w="100%"
      justify="space-between"
      align="center"
      mt={['10', '32']}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >

      <GridItem>
        <TravelType icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <TravelType icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <TravelType icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <TravelType icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <TravelType icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
