import { EmptyObject } from '@reduxjs/toolkit';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

export function StoreProviderWrapper(
  props: PropsWithChildren<EmptyObject>
): JSX.Element {
  return <Provider store={store}>{props.children}</Provider>;
}
