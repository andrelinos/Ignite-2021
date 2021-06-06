
import {
  Flex, Stack, Button, Text,
} from '@chakra-ui/react';

import { Input } from '../components/Form/Input';

export default function SignIn() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      align="center"
      justify="flex-start"
      flexDir="column"
      pt="100"
    >
      <Flex w="100%" m="0" height="100" justify="center" align="center">
        <Text
          w="64"
          fontSize="xx-large"
          fontWeight="bold"
          letterSpacing="tight"
          textAlign="center"
          userSelect="none"
        >
          dashgo
          <Text as="span" mx="1" color="pink.500">.</Text>
        </Text>
      </Flex>

      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Password" />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink">Entrar</Button>
      </Flex>
    </Flex>
  );
}
