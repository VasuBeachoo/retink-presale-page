import styled from "styled-components";
import Intro from "./Intro";
import ExplainerVideo from "./ExplainerVideo";
import FeaturePanels from "./FeaturePanels";
import FeatureBlocks from "./FeatureBlocks";
import Cta from "./Cta";
import Footer from "../Footer";

export const PresalePageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const PresalePage = ({ className }) => {
  return (
    <PresalePageBox className={className}>
      <Intro />
      <ExplainerVideo />
      <FeaturePanels />
      <FeatureBlocks />
      <Cta />
      <Footer />
    </PresalePageBox>
  );
};

export default PresalePage;
