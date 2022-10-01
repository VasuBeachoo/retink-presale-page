import styled from "styled-components";
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

export const FooterCopyright = styled.p``;

export const FooterCopyrightBox = styled.div``;

export const FooterSocialIconsBox = styled.div``;

export const FooterConnectHeading = styled.h3``;

export const FooterConnectBox = styled.div``;

export const FooterInfoText = styled.p``;

export const FooterInfoBox = styled.div``;

export const FooterContainer = styled.div``;

export const FooterBox = styled.footer``;

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
