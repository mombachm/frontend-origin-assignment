import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/components/App';
import { StoreProviderWrapper } from './app/StoreProviderWrapper';
import GlobalStyle from './styles/GlobalStyle.styled';

ReactDOM.render(
  <React.StrictMode>
    <StoreProviderWrapper>
      <GlobalStyle />
      <App />
    </StoreProviderWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
