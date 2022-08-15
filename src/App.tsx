import { ThemeProvider } from 'styled-components';

import { Router } from '@src/navigation/router.component';
import { GlobalStyles, darkTheme } from '@styles';

import { BootstrapApplication } from './bootstrap';

function App() {
  return (
    <BootstrapApplication>
      <ThemeProvider theme={darkTheme}>
        <Router />
        <GlobalStyles />
      </ThemeProvider>
    </BootstrapApplication>
  );
}

export default App;
