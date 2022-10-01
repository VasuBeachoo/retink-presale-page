import styled, { css } from "styled-components";

const SolidPurpleBtn = css``;

const OutlinePurpleBtn = css``;

const Button = styled.button``;

const DefaultBtn = ({ className, btnText }) => {
  return <Button className={className}>{btnText}</Button>;
};

export const NotifyMeBtn = styled(DefaultBtn).attrs({ btnText: "Notify Me" })``;

export const SignUpBtn = styled(DefaultBtn).attrs({
  btnText: "Sign up as a freelance partner",
})``;
