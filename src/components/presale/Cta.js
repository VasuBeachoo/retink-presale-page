import styled from "styled-components";
import { NameInput, EmailInput, mixinCtaInput } from "../Inputs";
import { NotifyMeBtn, SignUpBtn } from "../Buttons";
import { mixinSection, mixinSectionHeading } from "../../GlobalStyle";

export const CtaBtnsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;
`;

export const CtaEmailInput = styled(EmailInput)`
  ${mixinCtaInput}
`;

export const CtaNameInput = styled(NameInput)`
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
  return (
    <CtaBox className={className}>
      <CtaHeading>Sign Up For The BETA to see more</CtaHeading>
      <CtaInputsBox>
        <CtaNameInput placeholder="Business Name" />
        <CtaEmailInput placeholder="Email" />
      </CtaInputsBox>
      <CtaBtnsBox>
        <NotifyMeBtn />
        <SignUpBtn />
      </CtaBtnsBox>
    </CtaBox>
  );
};

export default Cta;
