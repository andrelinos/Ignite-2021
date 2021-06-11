/* eslint-disable react/prop-types */
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  name, label, error, ...rest
}, ref) => (
  <FormControl isInvalid={!!error}>
    {!!label && <FormLabel htmlFor="email">{label}</FormLabel>}

    <ChakraInput
      id={name}
      name={name}
      type="email"
      focusBorderColor="pink.500"
      bgColor="gray.900"
      variant="filled"
      ref={ref}
      _hover={{
        bgColor: 'gray.900',
      }}
      size="lg"
      {...rest}
    />
  </FormControl>
);

export const Input = forwardRef(InputBase);
