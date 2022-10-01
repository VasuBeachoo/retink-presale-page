import { createGlobalStyle, css } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --Light-purple-bg: rgba(126, 28, 254, 0.05);
    --Purple: #7e1cfe;
    --Black: #000000;
    --White: #ffffff;
  }

  * {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
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

export const mixinSectionHeading = css`
  color: var(--Purple);
  font-weight: 600;
  margin: 0;
`;

export const mixinSectionParagraph = css`
  color: var(--Black);
  font-weight: 400;
  margin: 0;
`;

export default GlobalStyle;
