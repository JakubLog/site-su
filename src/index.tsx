import AppProviders from 'providers/AppProviders';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import App from './views/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProviders>
        <App />
      </AppProviders>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
