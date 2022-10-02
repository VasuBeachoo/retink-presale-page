import { useState } from "react";
import styled from "styled-components";
import Logo from "../Logo";
import Input, {
  validateNameInput,
  validateEmailInput,
  mixinIntroInput,
} from "../Input";
import ErrorMsg from "../ErrorMsg";
import { NotifyMeBtn, SignUpBtn } from "../Buttons";
import introImg from "../../assets/avatar.png";

export const IntroImg = styled.img`
  width: 100%;

  @media (max-width: 1000px) {
    width: clamp(10rem, 70%, 23rem);
  }
`;

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
  gap: 1.5rem;
  margin-top: 0.5rem;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }
`;

export const IntroEmailInput = styled(Input)`
  ${mixinIntroInput}
`;

export const IntroNameInput = styled(Input)`
  ${mixinIntroInput}
`;

export const IntroInputBox = styled.span`
  display: inline-block;
  color: var(--Purple);
  border-bottom: 0.1rem solid var(--Black);
  padding-inline: 2rem;
`;

export const IntroSignUpParagraph = styled.p`
  font-size: 0.9rem;
  line-height: 3.5ch;
  margin: 0;

  @media (max-width: 1000px) {
    text-align: center;
    padding-inline: 1rem;
  }
`;

export const IntroSignUpHeading = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

export const IntroSignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 1000px) {
    align-items: center;
  }
`;

export const IntroParagraph = styled.p`
  max-width: 35rem;
  font-size: 1.05rem;
  line-height: 2.75ch;
  margin: 0;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const IntroPurpleText = styled.span`
  color: var(--Purple);
`;

export const IntroHeading = styled.h1`
  font-size: clamp(1.5rem, 6.25vw, 2.35rem);
  margin: 1.5rem 0 0 0;

  @media (max-width: 1000px) {
    text-align: center;
    margin-top: 0;
  }
`;

export const DesktopLogo = styled(Logo)`
  display: block;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const IntroTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;

  @media (max-width: 1000px) {
    align-items: center;
  }
`;

export const MobileLogo = styled(Logo)`
  display: none;

  @media (max-width: 1000px) {
    display: block;
  }
`;

export const IntroBox = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--Light-purple-bg);
  padding-block: 3rem 4.5rem;
  padding-left: clamp(2rem, 5vw, 5rem);

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 1.5rem;
    padding-right: clamp(2rem, 5vw, 5rem);
  }
`;

const Intro = ({ className }) => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [displayError, setDisplayError] = useState(false);

  const handleSubmit = () => {
    if (validateNameInput(nameInput) && validateEmailInput(emailInput)) {
      setNameInput("");
      setEmailInput("");
      setDisplayError(false);
    } else {
      setDisplayError(true);
    }
  };

  return (
    <IntroBox className={className}>
      <IntroTextBox>
        <DesktopLogo />
        <IntroHeading>
          Get Advanced AI <br /> + Expert Created{" "}
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
            <IntroInputBox>
              <IntroNameInput
                placeholder="Business Name"
                value={nameInput}
                setValue={setNameInput}
              />
            </IntroInputBox>{" "}
            would like a beta invite sent to{" "}
            <IntroInputBox>
              <IntroEmailInput
                placeholder="@email address"
                value={emailInput}
                setValue={setEmailInput}
              />
            </IntroInputBox>{" "}
            when it's ready!
          </IntroSignUpParagraph>
        </IntroSignUpBox>
        {displayError && <ErrorMsg msgText="Please enter valid information" />}
        <IntroBtnsBox>
          <NotifyMeBtn onClick={handleSubmit} />
          <SignUpBtn />
        </IntroBtnsBox>
      </IntroTextBox>
      <IntroImgBox>
        <IntroImg src={introImg} alt="retink-avatar" />
      </IntroImgBox>
      <MobileLogo />
    </IntroBox>
  );
};

export default Intro;
