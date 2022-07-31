import { ThemeProvider } from 'styled-components';

import { FooterBar } from '@components';
import { Main } from '@pages';
import { GlobalStyles, darkTheme } from '@styles';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <FooterBar />
      <Main />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
