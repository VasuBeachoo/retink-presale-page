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

export const FooterCopyrightLink = styled.p``;

export const FooterCopyright = styled.p`
  margin-right: auto;
`;

export const FooterCopyrightBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const FooterSocialIconsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const FooterConnectHeading = styled.h3``;

export const FooterConnectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: auto;
`;

export const FooterInfoText = styled.p``;

export const FooterInfoBox = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-auto-flow: column;
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template: repeat(2, auto) / repeat(2, auto);
  grid-auto-flow: column;
  width: 100%;
`;

export const FooterBox = styled.footer`
  ${mixinSection}
`;

const Footer = ({ className }) => {
  return (
    <FooterBox className={className}>
      <FooterContainer>
        <Logo />
        <FooterInfoBox>
          <FooterInfoText>Product by Retink Media UG</FooterInfoText>
          <FooterInfoText>Bonn, Germany</FooterInfoText>
          <FooterInfoText>Get Early Access</FooterInfoText>
          <FooterInfoText>Provide Feedback</FooterInfoText>
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
        <FooterCopyrightLink>Privacy Policy</FooterCopyrightLink>
        <FooterCopyrightLink>Terms of Service</FooterCopyrightLink>
      </FooterCopyrightBox>
    </FooterBox>
  );
};

export default Footer;
