import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { StoreProviderWrapper } from './app/StoreProviderWrapper';

ReactDOM.render(
  <React.StrictMode>
    <StoreProviderWrapper>
      <App />
    </StoreProviderWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
