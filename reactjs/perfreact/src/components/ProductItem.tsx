import { memo } from 'react';
import { Flex } from '@chakra-ui/react';

type ProductProps = {
  id: number;
  price: number;
  title: string;
  image: string;
};

interface ProductItemProps {
  product: ProductProps;
}

function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <Flex w="100%" my="0.5rem" justify="space-between">
      {product.title} - <strong>R${product.price},00</strong>
    </Flex>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
