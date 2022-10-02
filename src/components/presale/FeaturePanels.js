import styled from "styled-components";
import FeaturePanel from "../FeaturePanel";
import imgAI from "../../assets/artificial-intelligence.png";
import imgBrandIdentity from "../../assets/brand-identity.png";
import imgInformed from "../../assets/informed.png";
import imgReview from "../../assets/review.png";
import imgMonitor from "../../assets/monitor.png";

export const FeaturePanelsBox = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 100rem;
  padding: 3rem 2rem 6rem;
`;

const FeaturePanels = ({ className }) => {
  const featurePanels = [
    {
      icon: {
        src: imgAI,
        alt: "artificial-intelligence-image",
      },
      heading: "Make AI-assisted Content Choices",
      description:
        "Access and Order from an extensive catalogue in any language and on your budget's terms. If unsure, our AI guides you to the best.",
    },
    {
      icon: {
        src: imgBrandIdentity,
        alt: "brand-identity-image",
      },
      heading: "Upload and Maintain your Brand Identity",
      description:
        "Add your preferences and brand assets to ensure the contents is consistent with your brand identity. No brand asset? We can make for you!",
    },
    {
      icon: {
        src: imgInformed,
        alt: "informed-image",
      },
      heading: "Be informed as we create",
      description:
        "Your details are translated and sent to the AI, FP, or both (per your choice) as you relax and receive continuous updates.",
    },
    {
      icon: {
        src: imgReview,
        alt: "review-image",
      },
      heading: "Receive and Review",
      description:
        "The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.",
    },
    {
      icon: {
        src: imgMonitor,
        alt: "monitor-image",
      },
      heading: "Publish and Monitor your contents' progress",
      description:
        "The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.",
    },
  ];

  const displayFeaturePanels = (featurePanels) => {
    let key = 1000;

    return featurePanels.map((panel) => (
      <FeaturePanel
        key={key++}
        icon={panel.icon}
        heading={panel.heading}
        description={panel.description}
      />
    ));
  };

  return (
    <FeaturePanelsBox className={className}>
      {displayFeaturePanels(featurePanels)}
    </FeaturePanelsBox>
  );
};

export default FeaturePanels;
