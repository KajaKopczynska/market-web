import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './GlobalStyle';
import { Normalize } from 'styled-normalize';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <React.StrictMode theme={theme}>
      <GlobalStyle />
      <Normalize />
      <App />
    </React.StrictMode>
  </ThemeProvider>
);

reportWebVitals();
