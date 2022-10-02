import styled from "styled-components";
import FeatureBlock from "../FeatureBlock";
import imgLogos from "../../assets/logos.png";
import imgBlogWriting from "../../assets/blog-writing.png";
import imgAnimated from "../../assets/animated.png";
import imgProductDemo from "../../assets/product-demo.png";
import imgCopywriting from "../../assets/copywriting.png";
import imgSocialMedia from "../../assets/social-media.png";
import {
  mixinSection,
  mixinSectionHeading,
  mixinSectionParagraph,
} from "../../GlobalStyle";

export const FeatureBlocksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  max-width: 60rem;
`;

export const FeatureBlocksParagraph = styled.p`
  ${mixinSectionParagraph}
`;

export const FeatureBlocksHeading = styled.h2`
  ${mixinSectionHeading}
`;

export const FeatureBlocksTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const FeatureBlocksBox = styled.section`
  ${mixinSection}
  gap: 4rem;
`;

const FeatureBlocks = ({ className }) => {
  const featureBlocks = [
    {
      img: {
        src: imgLogos,
        alt: "logos-image",
      },
      heading: "Logos",
      paragraph:
        "Have a unique & creative logo designed to express and represent your brand identity.",
    },
    {
      img: {
        src: imgBlogWriting,
        alt: "blog-writing-image",
      },
      heading: "Blog Writing",
      paragraph:
        "Write SEO enriched blog posts as long or short articles on any topic of your choice.",
    },
    {
      img: {
        src: imgAnimated,
        alt: "animated-videos-image",
      },
      heading: "Animated Videos",
      paragraph:
        "Bring animated characters to life to keep your viewers engaged and entertained.",
    },
    {
      img: {
        src: imgProductDemo,
        alt: "product-demo-image",
      },
      heading: "Product Demo",
      paragraph:
        "Introduce your product to potential customers in a clear and creative video.",
    },
    {
      img: {
        src: imgCopywriting,
        alt: "copywriting-image",
      },
      heading: "Copywriting",
      paragraph:
        "Have creative and compelling copies written to boost your product, brand, service or company.",
    },
    {
      img: {
        src: imgSocialMedia,
        alt: "social-media-ads-image",
      },
      heading: "Social Media Ads",
      paragraph: "Boost sales and awareness with tailor made ads from experts.",
    },
  ];

  const displayFeatureBlocks = (featureBlocks) => {
    let key = 2000;

    return featureBlocks.map((block) => (
      <FeatureBlock
        key={key++}
        img={block.img}
        heading={block.heading}
        paragraph={block.paragraph}
      />
    ));
  };

  return (
    <FeatureBlocksBox className={className}>
      <FeatureBlocksTextBox>
        <FeatureBlocksHeading>
          Transform your Creation Process
        </FeatureBlocksHeading>
        <FeatureBlocksParagraph>
          With a new approach to ordering content, you can now stop juggling
          multiple documents and meetings and start publishing content faster
          and on demand
        </FeatureBlocksParagraph>
      </FeatureBlocksTextBox>
      <FeatureBlocksTextBox>
        <FeatureBlocksHeading>
          Activate your business growth with RetinkContent.
        </FeatureBlocksHeading>
        <FeatureBlocksParagraph>
          Save time and maintain your brand identity within your budget range or
          sign up for affordable plans and still access multiple content
          services like:
        </FeatureBlocksParagraph>
      </FeatureBlocksTextBox>
      <FeatureBlocksContainer>
        {displayFeatureBlocks(featureBlocks)}
      </FeatureBlocksContainer>
    </FeatureBlocksBox>
  );
};

export default FeatureBlocks;
