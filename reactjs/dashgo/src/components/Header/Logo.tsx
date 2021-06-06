import { Text } from '@chakra-ui/react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/">
      <Text
        w="64"
        fontSize={['2xl', '3xl', '4xl']}
        fontWeight="bold"
        letterSpacing="tight"
        cursor="pointer"
        userSelect="none"
      >
        dashgo
        <Text as="span" mx="1" color="pink.500">.</Text>
      </Text>
    </Link>
  );
}
