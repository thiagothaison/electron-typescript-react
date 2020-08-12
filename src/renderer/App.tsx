import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import { GlobalStyle } from './styles/GlobalStyle';
import { defaultTheme } from './styles/theme';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <HashRouter>
          <Routes />
        </HashRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

render(<App />, mainElement);
