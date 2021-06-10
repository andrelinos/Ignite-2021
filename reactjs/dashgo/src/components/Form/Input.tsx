import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { forwardRef } from 'react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

const InputBase = ({ name, label, ...rest }: InputProps) => (
  <FormControl>
    {!!label && <FormLabel htmlFor="email">{label}</FormLabel>}

    <ChakraInput
      id={name}
      name={name}
      type="email"
      focusBorderColor="pink.500"
      bgColor="gray.900"
      variant="filled"
      _hover={{
        bgColor: 'gray.900',
      }}
      size="lg"
      {...rest}
    />
  </FormControl>
);

export const Input = forwardRef(InputBase);
