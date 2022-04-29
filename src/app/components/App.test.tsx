import { App } from './App';
import { render } from '@testing-library/react';
import { StoreProviderWrapper } from '../StoreProviderWrapper';

describe('App', () => {
  describe('using testing library', () => {
    it('returns the text', () => {
      render(
        <StoreProviderWrapper>
          <App />
        </StoreProviderWrapper>
      );
      // expect(component.getByTestId('greetings-container').innerHTML).toBe(
      //   'Welcome to the Origin THA'
      // );
    });
  });
});
