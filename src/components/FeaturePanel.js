import styled from "styled-components";

export const FeaturePanelDescription = styled.p``;

export const FeaturePanelHeading = styled.h3``;

export const FeaturePanelIcon = styled.img``;

export const FeaturePanelBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const FeaturePanel = ({ className, icon, heading, description }) => {
  return (
    <FeaturePanelBox className={className}>
      <FeaturePanelIcon src={icon.src} alt={icon.alt} />
      <FeaturePanelHeading>{heading}</FeaturePanelHeading>
      <FeaturePanelDescription>{description}</FeaturePanelDescription>
    </FeaturePanelBox>
  );
};

export default FeaturePanel;
