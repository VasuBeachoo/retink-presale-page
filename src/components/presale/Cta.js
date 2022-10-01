import styled from "styled-components";
import Input from "../Input";
import { NotifyMeBtn, SignUpBtn } from "../Buttons";

export const CtaBtnsBox = styled.div``;

export const CtaInputsBox = styled.div``;

export const CtaHeading = styled.h2``;

export const CtaBox = styled.section``;

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
