import { ThemeProvider } from 'styled-components';

import { Main } from '@pages';
import { GlobalStyles, darkTheme } from '@styles';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Main />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
