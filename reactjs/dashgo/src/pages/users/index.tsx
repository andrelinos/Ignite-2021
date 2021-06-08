import {
  Box, Button, Flex, Heading, Text, Icon, Table, Th, Thead, Tr, Checkbox, Tbody,
  Td, FormLabel, useBreakpointValue,
} from '@chakra-ui/react';
import { RiAddLine, RiDeleteBack2Fill, RiPencilFill } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Button
              as="a"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} />}
            >
              Criar novo
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={['2', '4', '6']} color="green.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion ?? <Th>Data de cadastro</Th>}
                <Th w="8">Opções</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr _hover={{ bg: 'gray.700' }}>
                <Td px={['2', '4', '6']}>
                  <Checkbox name="chck" id={`chck${0}`} colorScheme="pink" />
                </Td>
                <Td>
                  <FormLabel w="100%" htmlFor={`chck${0}`}>
                    <Box>
                      <Text fontWeight="bold">Andrelino Silva</Text>
                      <Text fontSize="sm" color="gray.500">andrelinodev@gmail.com</Text>
                    </Box>
                  </FormLabel>
                </Td>
                {isWideVersion ?? <Td>06 de Junho, 2021</Td>}
                <Td>
                  <Box flexDir="column" w="100%" justifyContent="space-between" align="center">
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

            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
