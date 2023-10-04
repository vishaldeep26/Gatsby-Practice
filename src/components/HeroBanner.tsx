import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';

const HeroBanner: React.FC = () => {
  const data = useStaticQuery(graphql`
    query FeaturedImage {
      file(relativePath: { eq: "JBLTUNE600.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  console.log(data.file);

  return (
    <div className="mt-10 rounded-2xl px-24 py-10 bg-gray-600 mx-28 grid grid-cols-2 gap-10">
      <div className="text-white my-auto">
        <p className="font-semibold text-xl">Bestseller in Headphones</p>
        <h3 className="font-extrabold text-3xl">JBL TUNE600</h3>
        <p className="py-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
        <Link to="">
          <button className="rounded-2xl px-10 py-3 border-none bg-red-600 text-lg font-semibold" type="button">
            Buy now
          </button>
        </Link>
      </div>
      <div className="text-right">
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="JBLTUNE600 Headphones" className="w-[400px] h-[450px]" />
      </div>
    </div>
  );
};

export default HeroBanner;
