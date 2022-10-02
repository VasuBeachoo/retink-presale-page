import { css } from "styled-components";

export const NameInput = ({ className, placeholder }) => {
  return <input className={className} type="text" placeholder={placeholder} />;
};

export const EmailInput = ({ className, placeholder }) => {
  return <input className={className} type="email" placeholder={placeholder} />;
};

export const mixinCtaInput = css`
  all: unset;
  text-align: center;
  width: 100%;
  border: 0.1rem solid var(--Purple);
  border-radius: 0.75rem;
  padding: 0.75rem;

  &::placeholder {
    color: var(--Purple);
    opacity: 0.5;
  }
`;
