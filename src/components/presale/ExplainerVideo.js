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
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
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
