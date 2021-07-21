import { FormEvent, useState } from 'react';
import { Flex, Text, Input, Button } from '@chakra-ui/react';

import { DarkModeSwitch } from '../components/DarkModeSwitch';

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
        <SearchResults results={results} />
      </Flex>
    </Flex>
  );
}
