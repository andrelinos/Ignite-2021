import { FormEvent, useCallback, useState } from 'react';
import { Flex, Text, Input, Button } from '@chakra-ui/react';

import { DarkModeSwitch } from '../components/DarkModeSwitch';

import SearchResults from '../components/SearchResults';

type Results = {
  totalPrice: number;
  data: any[];
};

export default function Index() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: [],
  });

  async function handleSearch(e: FormEvent) {
    e.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    const products = data.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted: formatter.format(product.price),
      };
    });

    const totalPrice = data.reduce((total, product) => {
      return total + product.price;
    }, 0);


    setResults({ totalPrice, data: products });
  }

  const handleAddToWishList = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  return (
    <Flex flexDir="column" align="center" w="100%" h="100%">
      <DarkModeSwitch />
      <Text my="2rem" fontSize={42}>
        Buscar
      </Text>
      <Flex as="form" onSubmit={handleSearch}>
        <Input
          required
          maxW="50rem"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button w="10rem" type="submit" ml="0.5rem">
          Buscar
        </Button>
      </Flex>
      <Flex w="100%" h="100%">
        <SearchResults
          results={results.data}
          totalPrice={results.totalPrice}
          onAddToWishlist={handleAddToWishList}
        />
      </Flex>
    </Flex>
  );
}
