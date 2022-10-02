import styled from "styled-components";
import { mixinSection } from "../GlobalStyle";
import Logo from "./Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
  YouTubeIcon,
} from "./SocialIcons";

export const FooterCopyrightLink = styled.p`
  color: var(--White);
  margin: 0;
`;

export const FooterCopyright = styled.p`
  color: var(--White);
  margin: 0 auto 0 0;

  @media (max-width: 1000px) {
    margin-right: 0;
  }
`;

export const FooterCopyrightBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  background-color: var(--Black);
  padding: 2.5rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const FooterSocialIconsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const FooterConnectHeading = styled.h3`
  font-weight: 400;
  margin: 0;
`;

export const FooterConnectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  margin-left: auto;

  @media (max-width: 1000px) {
    align-items: center;
    margin-left: 0;
  }
`;

export const FooterLink = styled.span`
  user-select: none;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    color: var(--Purple);
  }
`;

export const FooterInfoText = styled.p`
  font-weight: 600;
  margin: 0;
`;

export const FooterInfoBox = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 0.75rem 1rem;
  grid-auto-flow: column;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template: repeat(2, auto) / repeat(2, auto);
  gap: 1rem;
  grid-auto-flow: column;
  width: 100%;
  background-color: var(--Gray);
  padding: 2.5rem;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
  }
`;

export const FooterBox = styled.footer`
  ${mixinSection}
  padding: 0;
`;

const Footer = ({ className }) => {
  return (
    <FooterBox className={className}>
      <FooterContainer>
        <Logo />
        <FooterInfoBox>
          <FooterInfoText>Product by Retink Media UG</FooterInfoText>
          <FooterInfoText>Bonn, Germany</FooterInfoText>
          <FooterInfoText>
            <FooterLink>Get Early Access</FooterLink>
          </FooterInfoText>
          <FooterInfoText>
            <FooterLink>Provide Feedback</FooterLink>
          </FooterInfoText>
        </FooterInfoBox>
        <FooterConnectBox>
          <FooterConnectHeading>Connect with Us</FooterConnectHeading>
          <FooterSocialIconsBox>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
            <YouTubeIcon />
            <PinterestIcon />
          </FooterSocialIconsBox>
        </FooterConnectBox>
      </FooterContainer>
      <FooterCopyrightBox>
        <FooterCopyright>Copyright &copy; 2021 Retink</FooterCopyright>
        <FooterCopyrightLink>
          <FooterLink>Privacy Policy</FooterLink>
        </FooterCopyrightLink>
        <FooterCopyrightLink>
          <FooterLink>Terms of Service</FooterLink>
        </FooterCopyrightLink>
      </FooterCopyrightBox>
    </FooterBox>
  );
};

export default Footer;
