import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import AppProviders from 'providers/AppProviders';
import { Provider } from 'react-redux';
import { store } from 'store/store';

interface props {
  children: React.ReactNode;
}

const AllTheProviders = ({ children }: props) => {
  return (
    <Provider store={store}>
      <AppProviders>{children}</AppProviders>
    </Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const customRender = (ui: any, options: any): any => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
