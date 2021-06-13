import {
  Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';

import { useRef } from 'react';
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

// const CreateUserFormSchema = yup.object().shape({
//   name: yup.string().required('Nome obrigatório...'),
//   email: yup.string().required('E-mail obrigatório...').email('E-mail inválido'),
//   password: yup.string().required('Senha obrigatória...')
//     .min(8, '6 caracteres no mínimo').max(30),
//   confirm_password: yup.string().oneOf([
//   null, yup.ref('password),
//   ], 'As senhas são diferentes.'),

// });

export default function CreateUser() {
  const {
    register, handleSubmit, formState: { errors }, formState, getValues,
  } = useForm<CreateUserFormData>({
    // resolver: yupResolver(signInFormSchema),
  });

  const password = useRef({});
  password.current = getValues('password');

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(values);
  };

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid w="100%" minChildWidth="240px" spacing={['6', '8']}>
              <Box>
                <Input
                  name="name"
                  type="text"
                  label="Nome completo"
                  error={errors.name}
                  {...register('name', { required: 'Nome obrigatório...' })}
                />
                <Box color="red.300" py="1">
                  <ErrorMessage errors={errors} name="name" />
                </Box>
              </Box>
              <Box>
                <Input
                  name="email"
                  type="email"
                  label="E-mail"
                  error={errors.email}
                  {...register('email', { required: 'E-mail obrigatório...' })}
                />
                <Box color="red.300" py="1">
                  <ErrorMessage errors={errors} name="email" />
                </Box>
              </Box>
            </SimpleGrid>

            <SimpleGrid w="100%" minChildWidth="240px" spacing={['6', '8']}>
              <Box>
                <Input
                  name="password"
                  type="password"
                  label="Senha"
                  error={errors.password}
                  {...register('password', {
                    required: 'Senha obrigatória...',
                    minLength: {
                      value: 8,
                      message: 'A senha deve ter 8 caracteres no mínimo...',
                    },
                  })}
                />
                <Box color="red.300" py="1">
                  <ErrorMessage errors={errors} name="password" />
                </Box>
              </Box>
              <Box>
                <Input
                  name="password_confirmation"
                  type="password"
                  label="Confirmação de senha"
                  error={errors.password_confirmation}
                  {...register('password_confirmation',
                    {
                      validate: (value) => value === password.current
                     || 'As senhas precisam ser iguais...',

                      required: 'Confirme sua senha...',
                    })}
                />
                <Box color="red.300" py="1">
                  <ErrorMessage errors={errors} name="password_confirmation" />
                </Box>
              </Box>
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing={['2', '4', '6']} justify={['center', 'right']}>

              <Link href="/users" passHref>
                <Button
                  w={127}
                  colorScheme="whiteAlpha"
                >
                  Cancelar
                </Button>
              </Link>

              <Button
                w={127}
                colorScheme="pink"
                type="submit"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>

            </HStack>

          </Flex>

        </Box>
      </Flex>
    </Box>
  );
}
