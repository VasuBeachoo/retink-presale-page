import styled from "styled-components";

export const FeaturePanelDescription = styled.p`
  text-align: center;
  max-width: 20rem;
  font-size: 1.025rem;
  line-height: 2.75ch;
  margin: 0;
  transition: 0.25s;
`;

export const FeaturePanelHeading = styled.h3`
  text-align: center;
  max-width: 20rem;
  font-size: 1.275rem;
  margin: 0;
  transition: 0.25s;
`;

export const FeaturePanelIcon = styled.img``;

export const FeaturePanelBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  user-select: none;
  border: 0.15rem solid transparent;
  border-radius: 0.75rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 3.5rem;
  transition: 0.25s;

  &:hover {
    border-color: var(--Purple);

    ${FeaturePanelHeading} {
      color: var(--Purple);
    }

    ${FeaturePanelDescription} {
      color: var(--Purple);
    }
  }
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
