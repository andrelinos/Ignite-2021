import { Flex, Box, Text, Grid, GridItem, Image } from '@chakra-ui/react';
import { useMemo } from 'react';
import { ProductItem } from './ProductItem';

type SearchResultsProps = {
  id: number;
  price: number;
  title: string;
  image: string;
};

interface ResultProps {
  results: SearchResultsProps[];
}

export default function SearchResults({ results }: ResultProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0)
  }, [results])

  return (
    <Flex flexDir="column" w="100%" h="100%">
      {results.length > 0 && (
        <>
          <Text mx="auto" my="1rem" fontSize={18}>
          {results.length} Resultados para sua pesquisa. (Total: R${totalPrice},00)
          </Text>
          <Grid mx="auto" templateColumns="repeat(5, 1fr)" gap="40px">
          {results.map((product) => (
            <Box mb="1rem" borderRadius="0.215rem" bg="gray.200" w="180px" h="180px" justify="space-between" key={product.id}>
              <Box w="100%" h="100%">
                {product.image && (<Image w="100%" h="100%" borderTopRadius="0.215rem" src={product.image} />)}
              </Box>
              <ProductItem product={product} />
            </Box>
          ))}
          </Grid>
        </>
      )}
    </Flex>
  );
}
