import { memo, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { AddProductToWishListProps } from './AddProductToWishList';
// import { AddProductToWishList } from './AddProductToWishList';

const AddProductToWishList = dynamic<AddProductToWishListProps>(async () => {
  const mod = await import('./AddProductToWishList');
  return mod.AddProductToWishList;
}, {
  loading: () => <span>Carregando...</span>
});

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
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  return (
    <Flex w="100%" my="0.5rem" justify="space-between">
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>Favoritar</button>
      {isAddingToWishList && (
        <AddProductToWishList
          onAddToWishList={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}
    </Flex>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
