import { createGlobalStyle, css } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;

export const mixinSection = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export default GlobalStyle;
