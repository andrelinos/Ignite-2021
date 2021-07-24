import { Flex, Box, Text, Grid, GridItem, Image } from '@chakra-ui/react';
import { List, ListRowRenderer } from 'react-virtualized';
import { ProductItem } from './ProductItem';

type SearchResultsProps = {
  id: number;
  title: string;
  image: string;
  price: number;
  priceFormatted: string;
};

interface ResultProps {
  totalPrice: number;
  results: SearchResultsProps[];
  onAddToWishlist: (id: number) => void;
}

export default function SearchResults({
  totalPrice,
  results,
  onAddToWishlist,
}: ResultProps) {

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
        product={results[index]}
        onAddToWishlist={onAddToWishlist}
      />
      </div>
    )
  }

  return (
    <Flex flexDir="column" w="100%" h="100%">
      {results.length > 0 && (
        <>
          <Text mx="auto" my="1rem" fontSize={18}>
            {results.length} Resultados para sua pesquisa. (Total: R$
            {totalPrice},00)
          </Text>
          <Grid mx="auto" templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)',"repeat(5, 1fr)"]} gap="40px">
            <List
              width={900}
              height={300}
              rowHeight={30}
              overscanRowCount={5}
              rowCount={results.length}
              rowRenderer={rowRenderer}
            />
            {/* {results.map((product) => (
              <Box
                mb="1rem"
                borderRadius="0.215rem"
                bg="gray.200"
                w="180px"
                h="180px"
                justify="space-between"
                key={product.id}
              >
                <Box w="100%" h="100%">
                  {product.image && (
                    <Image
                      w="100%"
                      h="100%"
                      borderTopRadius="0.215rem"
                      src={product.image}
                    />
                  )}
                </Box>
                <ProductItem
                  product={product}
                  onAddToWishlist={onAddToWishlist}
                />
              </Box>
            ))} */}
          </Grid>
        </>
      )}
    </Flex>
  );
}
