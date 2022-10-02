import styled from "styled-components";

export const ErrorMsgText = styled.p`
  color: var(--Red);
  margin: 0;
`;

export const ErrorMsgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const ErrorMsg = ({ className, msgText }) => {
  return (
    <ErrorMsgBox className={className}>
      <ErrorMsgText>{msgText}</ErrorMsgText>
    </ErrorMsgBox>
  );
};

export default ErrorMsg;
