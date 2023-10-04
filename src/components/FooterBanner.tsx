import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';

const FooterBanner: React.FC = () => {
  const data = useStaticQuery(graphql`
    query FooterImage {
      file(relativePath: { eq: "NikeAirJordan.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, height: 350, width: 300)
        }
      }
    }
  `);

  console.log(data);

  return (
    <div className="bg-black text-white py-5">
      <div className="grid grid-cols-3 gap-5 px-28">
        <ul className="m-0 text-center text-lg space-y-4">
          <li>50% OFF</li>
          <li>Nike Air Jodan</li>
          <li>Women Purple</li>
          <li>1 Day</li>
        </ul>
        <div className="footer-banner-image">
          <GatsbyImage className="block mx-auto w-40" image={data.file.childImageSharp.gatsbyImageData} alt="Nike Air Jordan" />
        </div>
        <ul className="m-0 text-center text-lg space-y-4">
          <li>smallText</li>
          <li>midText</li>
          <li>desc</li>
          <li>
            <Link to="">
              <button type="button">Buy Now</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterBanner;
