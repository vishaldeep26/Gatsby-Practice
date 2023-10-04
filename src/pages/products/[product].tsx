import { useQuery, gql } from '@apollo/client';
import * as React from 'react';

const GET_ONE_PRODUCT = gql`
  query GetOneProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      description
      price
      imageURL
    }
  }
`;

type ProductProps = {
  params: {
    product: number;
  };
};

const Product: React.FC<ProductProps> = ({ params }) => {
  const id = params.product;

  const { loading, error, data } = useQuery(GET_ONE_PRODUCT, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div>
      <h1>{data.getProduct.name}</h1>
      <img src={data.getProduct.imageURL} alt={data.getProduct.name} />
      <p>{data.getProduct.description}</p>
      <p>Price: {data.getProduct.price}</p>
    </div>
  );
};

export default Product;
