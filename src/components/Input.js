import { css } from "styled-components";

const Input = ({ className, placeholder, value, setValue }) => {
  return (
    <input
      className={className}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const validateNameInput = (input) => {
  return input.trim() !== "";
};

export const validateEmailInput = (input) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(input);
};

export const mixinIntroInput = css`
  all: unset;
  text-align: center;

  &::placeholder {
    color: var(--Purple);
  }
`;

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

export default Input;
