import { ThemeProvider } from 'styled-components';

import { Router } from '@src/navigation/router.component';
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
