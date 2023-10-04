import { Link } from 'gatsby';
import * as React from 'react';

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  imageURL: string;
};

type ProductProps = {
  product: Product;
};

const ProductCard: React.FC<ProductProps> = ({ product: { id, imageURL, name, price } }) => {
  return (
    <div>
      <Link to={`/products/${id}`}>
        <div className="text-center mx-auto">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/640px-IMG_Academy_Logo.svg.png"
            className="w-48 block mx-auto my-10"
            alt="Headphones"
          ></img>
          <p className="font-semibold text-lg">{name}</p>
          <p className="font-semibold text-lg">₹ {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
