import { memo } from 'react';
import { Flex } from '@chakra-ui/react';

type ProductProps = {
  id: number;
  title: string;
  image: string;
  price: number;
  priceFormatted: string;
};

interface ProductItemProps {
  product: ProductProps;
  onAddToWishlist: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  return (
    <Flex w="100%" my="0.5rem" justify="space-between">
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => onAddToWishlist(product.id)}>Add to wishlist</button>
    </Flex>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
