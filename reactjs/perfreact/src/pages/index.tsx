import { FormEvent, useState } from 'react';
import { Flex, Text, Input, Button } from '@chakra-ui/react';

import SearchResults from '../components/SearchResults';

export default function Index() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  async function handleSearch(e: FormEvent) {
    e.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    setResults(data);
  }

  return (
    <Flex flexDir="column" align="center" w="100vw" h="100vh">
      <Text my="2rem" fontSize={42}>Buscar</Text>
      <Flex as="form" onSubmit={handleSearch}>
        <Input
          maxW="50rem"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button type="submit">Buscar</Button>
      </Flex>
      <Flex w="100%" h="100%">
        <SearchResults results={results} />
      </Flex>
    </Flex>
  );
}
