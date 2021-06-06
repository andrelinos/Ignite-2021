import {
  Text, Link, Icon, LinkProps as CkLinkProps,
} from '@chakra-ui/react';
import { ElementType } from 'react';

interface NavLinkProps extends CkLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link
      display="flex"
      align="center"
      _hover={{
        textDecor: 'none',
      }}
      {...rest}
    >
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  );
}
