import styled from "styled-components";
import iconFacebook from "../assets/facebook.png";
import iconTwitter from "../assets/twitter.png";
import iconInstagram from "../assets/instagram.png";
import iconLinkedIn from "../assets/linkedin.png";
import iconYouTube from "../assets/youtube.png";
import iconPinterest from "../assets/pinterest.png";

const SocialIcon = styled.img`
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

export const FacebookIcon = styled(SocialIcon).attrs({
  src: iconFacebook,
  alt: "facebook-icon",
})``;

export const TwitterIcon = styled(SocialIcon).attrs({
  src: iconTwitter,
  alt: "twitter-icon",
})``;

export const InstagramIcon = styled(SocialIcon).attrs({
  src: iconInstagram,
  alt: "instagram-icon",
})``;

export const LinkedInIcon = styled(SocialIcon).attrs({
  src: iconLinkedIn,
  alt: "linkedin-icon",
})``;

export const YouTubeIcon = styled(SocialIcon).attrs({
  src: iconYouTube,
  alt: "youtube-icon",
})``;

export const PinterestIcon = styled(SocialIcon).attrs({
  src: iconPinterest,
  alt: "pinterest-icon",
})``;
