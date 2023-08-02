import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './GlobalStyle';
import { Normalize } from 'styled-normalize';
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <React.StrictMode>
          <GlobalStyle />
          <Normalize />
          <App />
        </React.StrictMode>
      </ThemeProvider>
    </Provider>
  </HashRouter>
);

reportWebVitals();
