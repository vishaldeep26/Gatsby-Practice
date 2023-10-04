import { Link, useStaticQuery, graphql } from 'gatsby';
import * as React from 'react';

const NavBar: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="inline-flex bg-red-600 h-20 w-full justify-between px-28 items-center">
      <p className="text-gray-300 font-semibold text-xl">
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </p>
      <div className="font-semibold text-lg inline-flex justify-between space-x-5 text-gray-200">
        <Link to="categories">Categories</Link>
        <Link to="products">Products</Link>
        <Link to="">About</Link>
        <Link to="">Contact Us</Link>
      </div>
    </div>
  );
};

export default NavBar;
