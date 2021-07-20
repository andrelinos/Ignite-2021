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
          <Text mx="auto" my="1rem" fontSize={24}>
            Resultados
          </Text>
          <Flex w="100%" h="100%" bg="gray.600">
            {results.map((product) => {
              <ProductItem product={product} />;
            })}
          </Flex>
        </>
      )}
    </Flex>
  );
}
