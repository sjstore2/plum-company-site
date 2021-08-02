import AppRoutes from './AppRoutes';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    font-family: "Lato", sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
