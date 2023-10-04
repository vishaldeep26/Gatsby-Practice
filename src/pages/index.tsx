import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { useQuery, gql } from '@apollo/client';
import HeroBanner from '../components/HeroBanner';
import FooterBanner from '../components/FooterBanner';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import Seo from '../components/Seo';

const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    getAllProducts {
      id
      name
      description
      price
      imageURL
    }
  }
`;

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  imageURL: string;
};

const Home: React.FC<PageProps> = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <Layout>
      <HeroBanner />
      <div className="text-center py-10">
        <h2 className="text-3xl font-bold mb-3">Best Selling Products</h2>
        <p className="text-lg">Products of many variations...</p>
      </div>
      <div className="mx-28 grid grid-cols-3 gap-5 pb-10">
        {data.getAllProducts?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <FooterBanner />
    </Layout>
  );
};

export default Home;

export const Head: HeadFC = () => <Seo title="Home Page" />;
