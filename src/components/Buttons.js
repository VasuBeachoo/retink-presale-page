import styled, { css } from "styled-components";

const mixinSolidPurpleBtn = css`
  border-color: var(--Purple);
  background-color: var(--Purple);
  color: var(--White);
`;

const mixinOutlinePurpleBtn = css`
  border-color: var(--Purple);
  background-color: unset;
  color: var(--Purple);
`;

const Button = styled.button`
  all: unset;
  text-align: center;
  min-width: 10rem;
  user-select: none;
  font-size: 1.05rem;
  font-weight: 400;
  border: 0.15rem solid;
  border-radius: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding: 0.75rem 1.25rem;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
  }
`;

const DefaultBtn = ({ className, btnText, onClick }) => {
  return (
    <Button className={className} onClick={onClick}>
      {btnText}
    </Button>
  );
};

export const NotifyMeBtn = styled(DefaultBtn).attrs({ btnText: "Notify Me" })`
  ${mixinSolidPurpleBtn}

  &:hover {
    ${mixinOutlinePurpleBtn}
  }
`;

export const SignUpBtn = styled(DefaultBtn).attrs({
  btnText: "Sign up as a freelance partner",
})`
  ${mixinOutlinePurpleBtn}

  &:hover {
    ${mixinSolidPurpleBtn}
  }
`;
