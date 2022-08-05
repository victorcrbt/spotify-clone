import { ThemeProvider } from 'styled-components';

import { Router } from '@src/navigation/router';
import { GlobalStyles, darkTheme } from '@styles';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
