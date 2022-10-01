import styled from "styled-components";
import Logo from "../Logo";
import { NotifyMeBtn, SignUpBtn } from "../Buttons";
import introImg from "../../assets/avatar.png";

export const IntroImg = styled.img``;

export const IntroImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IntroBtnsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const IntroSignUpPlaceholder = styled.span``;

export const IntroSignUpParagraph = styled.p``;

export const IntroSignUpHeading = styled.h2``;

export const IntroSignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const IntroParagraph = styled.p``;

export const IntroPurpleText = styled.span``;

export const IntroHeading = styled.h1``;

export const IntroTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const IntroBox = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const Intro = ({ className }) => {
  return (
    <IntroBox className={className}>
      <IntroTextBox>
        <Logo />
        <IntroHeading>
          Get Advanced AI + Expert Created{" "}
          <IntroPurpleText>Logos</IntroPurpleText>
        </IntroHeading>
        <IntroParagraph>
          Boost your sales <IntroPurpleText>10x faster</IntroPurpleText> with
          content customized by our unique partnership of{" "}
          <IntroPurpleText>
            human creativity and AI optimization
          </IntroPurpleText>
        </IntroParagraph>
        <IntroSignUpBox>
          <IntroSignUpHeading>Sign up for the BETA!</IntroSignUpHeading>
          <IntroSignUpParagraph>
            <IntroSignUpPlaceholder>Business Name</IntroSignUpPlaceholder> would
            like a beta invite sent to{" "}
            <IntroSignUpPlaceholder>@email address</IntroSignUpPlaceholder> when
            it's ready!
          </IntroSignUpParagraph>
        </IntroSignUpBox>
        <IntroBtnsBox>
          <NotifyMeBtn />
          <SignUpBtn />
        </IntroBtnsBox>
      </IntroTextBox>
      <IntroImgBox>
        <IntroImg src={introImg} alt="retink-avatar" />
      </IntroImgBox>
    </IntroBox>
  );
};

export default Intro;
