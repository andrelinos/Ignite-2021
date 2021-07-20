import { Flex, Text } from '@chakra-ui/react';
import ProductItem from './ProductItem';

type SearchResultsProps = {
  id: number;
  price: number;
  title: string;
};

interface ResultProps {
  results: SearchResultsProps[];
}

export default function SearchResults({ results }: ResultProps) {
  return (
    <Flex flexDir="column" w="100%" h="100%">
      {results.length > 0 && (
        <>
          <Text mx="auto" my="1rem" fontSize={18}>
          {results.length} Resultados para sua pesquisa.
          </Text>
          <Flex w="100%" h="100%">
            {results.map((product) => {
              <ProductItem product={product} />;
            })}
          </Flex>
        </>
      )}
    </Flex>
  );
}
