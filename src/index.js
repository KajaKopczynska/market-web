import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './GlobalStyle';
import { Normalize } from 'styled-normalize';
import { HashRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <GlobalStyle />
        <Normalize />
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </HashRouter>
);

reportWebVitals();
