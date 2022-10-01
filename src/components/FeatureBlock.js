import styled from "styled-components";

export const FeatureBlockParagraph = styled.p`
  max-width: 18rem;
  line-height: 2.5ch;
  margin: 0;
`;

export const FeatureBlockHeading = styled.h3`
  position: relative;
  font-weight: 300;
  margin: 0;

  &:after {
    content: "";
    background: var(--Purple);
    position: absolute;
    bottom: -0.35rem;
    left: 0;
    width: 50%;
    height: 0.15rem;
    transition: 0.25s;
  }
`;

export const FeatureBlockImg = styled.img`
  width: 100%;
`;

export const FeatureBlockBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  gap: 1.25rem;
  max-width: 20rem;
  user-select: none;

  &:hover {
    cursor: pointer;

    ${FeatureBlockHeading} {
      &:after {
        width: 100%;
      }
    }
  }
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
