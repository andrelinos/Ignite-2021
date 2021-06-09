import {
  Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';

import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export default function CreateUser() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={['6', '8']}>
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid w="100%" minChildWidth="240px" spacing={['6', '8']}>
              <Input name="name" label="Nome completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid w="100%" minChildWidth="240px" spacing={['6', '8']}>
              <Input name="password" label="Senha" />
              <Input name="password" type="password" label="Confirmação de senha" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing={['2', '4', '6']} justify={['center', 'right']}>

              <Link href="/users" passHref>
                <Button w={127} colorScheme="whiteAlpha">Cancelar</Button>
              </Link>

              <Button w={127} colorScheme="pink">Salvar</Button>

            </HStack>

          </Flex>

        </Box>
      </Flex>
    </Box>
  );
}
