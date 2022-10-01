import styled from "styled-components";
import imgVideo from "../../assets/explainer-video.png";

export const ExplainerVideoImg = styled.img``;

export const ExplainerVideoImgBox = styled.div``;

export const ExplainerVideoHeading = styled.h2``;

export const ExplainerVideoBox = styled.section``;

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
