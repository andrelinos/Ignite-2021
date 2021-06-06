
import {
  FormControl,
  FormLabel,
  Input as CkInput,
  InputProps as CkInputProps,
} from '@chakra-ui/react';

interface InputProps extends CkInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      <FormLabel htmlFor="email">{label}</FormLabel>
      <CkInput
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
}
