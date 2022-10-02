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
  padding-inline: 2rem;
`;

export const mixinSectionHeading = css`
  text-align: center;
  color: var(--Purple);
  font-size: 1.65rem;
  font-weight: 600;
  margin: 0;
`;

export const mixinSectionParagraph = css`
  text-align: center;
  max-width: 50rem;
  color: var(--Black);
  font-size: 1.05rem;
  font-weight: 400;
  line-height: 2.75ch;
  padding-inline: 1rem;
  margin: 0;
`;

export default GlobalStyle;
