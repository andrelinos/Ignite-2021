import { Flex } from '@chakra-ui/react';

type ProductItemProps = {
  id: number;
  price: number;
  title: string;
  image: string;
};

interface ProductProps {
  product: ProductItemProps;
}

export default function SearchResults({ product }: ProductProps) {
  return (
    <Flex w="100%" my="0.5rem" justify="space-between">
      {product.title} - <strong>R${product.price},00</strong>
    </Flex>
  );
}
