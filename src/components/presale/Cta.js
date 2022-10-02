import { useState } from "react";
import styled from "styled-components";
import Input, {
  validateNameInput,
  validateEmailInput,
  mixinCtaInput,
} from "../Input";
import ErrorMsg from "../ErrorMsg";
import { NotifyMeBtn, SignUpBtn } from "../Buttons";
import { mixinSection, mixinSectionHeading } from "../../GlobalStyle";

export const CtaBtnsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;
`;

export const CtaEmailInput = styled(Input)`
  ${mixinCtaInput}
`;

export const CtaNameInput = styled(Input)`
  ${mixinCtaInput}
`;

export const CtaInputsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  width: 55%;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 1rem;
    width: clamp(15rem, 75%, 25rem);
  }
`;

export const CtaHeading = styled.h2`
  ${mixinSectionHeading}
`;

export const CtaBox = styled.section`
  ${mixinSection}
  gap: 2rem;
  padding: 6rem 2rem 7.85rem;
`;

const Cta = ({ className }) => {
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
    <CtaBox className={className}>
      <CtaHeading>Sign Up For The BETA to see more</CtaHeading>
      <CtaInputsBox>
        <CtaNameInput
          placeholder="Business Name"
          value={nameInput}
          setValue={setNameInput}
        />
        <CtaEmailInput
          placeholder="Email"
          value={emailInput}
          setValue={setEmailInput}
        />
      </CtaInputsBox>
      <CtaBtnsBox>
        {displayError && <ErrorMsg msgText="Please enter valid information" />}
        <NotifyMeBtn onClick={handleSubmit} />
        <SignUpBtn />
      </CtaBtnsBox>
    </CtaBox>
  );
};

export default Cta;
