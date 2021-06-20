import {
  Box, Button, Flex, Heading, Text, Icon, Table, Th, Thead, Tr, Checkbox, Tbody,
  Td, FormLabel, useBreakpointValue, Spinner,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect } from 'react';
import { RiAddLine, RiDeleteBack2Fill, RiPencilFill } from 'react-icons/ri';
import { useQuery } from 'react-query';

import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export default function UserList() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users');
    const data = await response.json();

    const users: User[] = data.users.map(((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    })));

    return users;
  }, {
    staleTime: 1000 * 5,
  });

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then((response) => response.json)
      .then((data) => console.log(data));
  }, []);

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px={['0', '6']}>
        <Sidebar />

        <Box flex="1" borderRadius={['0', '0.5rem']} bg="gray.800" p={['4', '8']}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          { isLoading
            ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            )
            : error ? (
              <Flex justify="center">Falha ao obter dados os usuarios.</Flex>
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px={['2', '4', '6']} color="green.300" width="8">
                        <Checkbox colorScheme="pink" />
                      </Th>
                      <Th>Usuário</Th>
                      {isWideVersion && <Th>Data de cadastro</Th>}
                      <Th w="8">Opções</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.map((user) => (
                      <Tr key={user.id} _hover={{ bg: 'gray.700' }}>
                        <Td px={['2', '4', '6']}>
                          <Checkbox name="chck" id={`chck${user.id}`} colorScheme="pink" />
                        </Td>
                        <Td>
                          <FormLabel w="100%" htmlFor={`chck${user.id}`}>
                            <Box>
                              <Text fontWeight="bold">{user.name}</Text>
                              <Text fontSize="sm" color="gray.500">{user.email}</Text>
                            </Box>
                          </FormLabel>
                        </Td>
                        {isWideVersion && <Td>{user.createdAt}</Td>}
                        <Td>
                          <Box
                            flexDir="column"
                            w="100%"
                            justifyContent="space-between"
                            align="center"
                          >
                            <Button
                              as="a"
                              leftIcon={<Icon color="blue.300" as={RiPencilFill} />}
                              _hover={{ svg: { color: 'blue.500' } }}
                              cursor="pointer"
                              variant="unstyled"
                              p="0"
                              w="0"
                            />
                            <Button
                              as="a"
                              leftIcon={<Icon color="red.300" as={RiDeleteBack2Fill} />}
                              _hover={{ svg: { color: 'red.500' } }}
                              cursor="pointer"
                              variant="unstyled"
                              p="0"
                              w="0"
                            />
                          </Box>
                        </Td>
                      </Tr>
                    ))}

                  </Tbody>
                </Table>
                <Pagination />
              </>
            )}
        </Box>
      </Flex>
    </Box>
  );
}
