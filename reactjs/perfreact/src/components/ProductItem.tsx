type ProductItemProps = {
  id: number;
  price: number;
  title: string;
};

interface ProductProps {
  product: ProductItemProps;
}

export default function SearchResults({ product }: ProductProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}
