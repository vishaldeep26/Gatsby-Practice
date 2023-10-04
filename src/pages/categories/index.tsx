import * as React from 'react';
import Layout from '../../components/Layout';

const categories = [
  {
    id: 1,
    name: 'Electronics',
    description: 'All electronic products',
    imageURL: '',
  },
  {
    id: 2,
    name: 'Clothing',
    description: 'All electronic products',
    imageURL: '',
  },
  {
    id: 3,
    name: 'Decoration',
    description: 'All electronic products',
    imageURL: '',
  },
  {
    id: 4,
    name: 'Men',
    description: 'All electronic products',
    imageURL: '',
  },
  {
    id: 5,
    name: 'Women',
    description: 'All electronic products',
    imageURL: '',
  },
];

const Categories: React.FC = () => {
  return (
    <Layout>
      <h1>Categories</h1>
      <p>All Categories</p>
      <div>
        {categories.map((category) => (
          <div key={category.id}>
            <h2>{category.name}</h2>
            <p>{category.description}</p>
            <img src={category.imageURL} alt={category.name} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Categories;
