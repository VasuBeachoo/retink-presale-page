import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import PresalePage from "./components/presale/PresalePage";

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppBox>
      <GlobalStyle />
      <PresalePage />
    </AppBox>
  );
};

export default App;
