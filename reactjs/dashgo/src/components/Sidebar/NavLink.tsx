import {
  Text, Link as ChakraLink, Icon, LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import { ElementType } from 'react';

import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({
  icon, children, href, ...rest
}: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink
        display="flex"
        align="center"
        _hover={{
          textDecor: 'none',
        }}
        {...rest}
      >
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  );
}
