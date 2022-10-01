import styled from "styled-components";
import imgVideo from "../../assets/explainer-video.png";
import { mixinSection } from "../../GlobalStyle";

export const ExplainerVideoImg = styled.img``;

export const ExplainerVideoImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ExplainerVideoHeading = styled.h2``;

export const ExplainerVideoBox = styled.section`
  ${mixinSection}
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
