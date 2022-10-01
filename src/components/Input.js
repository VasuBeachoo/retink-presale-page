import styled from "styled-components";

const StyledInput = styled.input``;

const Input = ({ className, type, placeholder }) => {
  return (
    <StyledInput className={className} type={type} placeholder={placeholder} />
  );
};

export default Input;
