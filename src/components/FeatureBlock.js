import styled from "styled-components";

export const FeatureBlockParagraph = styled.p``;

export const FeatureBlockHeading = styled.h3``;

export const FeatureBlockImg = styled.img``;

export const FeatureBlockBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const FeatureBlock = ({ className, img, heading, paragraph }) => {
  return (
    <FeatureBlockBox className={className}>
      <FeatureBlockImg src={img.src} alt={img.alt} />
      <FeatureBlockHeading>{heading}</FeatureBlockHeading>
      <FeatureBlockParagraph>{paragraph}</FeatureBlockParagraph>
    </FeatureBlockBox>
  );
};

export default FeatureBlock;
