import React from 'react';
import { render } from '@testing-library/react';
import AppProviders from 'providers/AppProviders';
import { store } from 'store/store';
import { Provider } from 'react-redux';

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
const customRender = (ui: any, options: any) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
