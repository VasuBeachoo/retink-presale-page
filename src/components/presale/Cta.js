import styled from "styled-components";
import Input from "../Input";
import { NotifyMeBtn, SignUpBtn } from "../Buttons";
import { mixinSection, mixinSectionHeading } from "../../GlobalStyle";

export const CtaBtnsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;
`;

export const CtaInputsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const CtaHeading = styled.h2`
  ${mixinSectionHeading}
`;

export const CtaBox = styled.section`
  ${mixinSection}
  gap: 2rem;
  padding: 6rem 2rem 7.5rem;
`;

const Cta = ({ className }) => {
  return (
    <CtaBox className={className}>
      <CtaHeading>Sign Up For The BETA to see more</CtaHeading>
      <CtaInputsBox>
        <Input type="text" placeholder="Business Name" />
        <Input type="email" placeholder="Email" />
      </CtaInputsBox>
      <CtaBtnsBox>
        <NotifyMeBtn />
        <SignUpBtn />
      </CtaBtnsBox>
    </CtaBox>
  );
};

export default Cta;
