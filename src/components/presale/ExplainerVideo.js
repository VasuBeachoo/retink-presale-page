import styled from "styled-components";
import imgVideo from "../../assets/explainer-video.png";
import { mixinSection, mixinSectionHeading } from "../../GlobalStyle";

export const ExplainerVideoImg = styled.img`
  width: 100%;
`;

export const ExplainerVideoImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ExplainerVideoHeading = styled.h2`
  ${mixinSectionHeading}
`;

export const ExplainerVideoBox = styled.section`
  ${mixinSection}
  gap: 1.5rem;
  padding-block: 3.5rem 2.5rem;
`;

const ExplainerVideo = ({ className }) => {
  return (
    <ExplainerVideoBox className={className}>
      <ExplainerVideoHeading>EXPLAINER VIDEO</ExplainerVideoHeading>
      <ExplainerVideoImgBox>
        <ExplainerVideoImg src={imgVideo} alt="explainer-video-screenshot" />
      </ExplainerVideoImgBox>
    </ExplainerVideoBox>
  );
};

export default ExplainerVideo;
