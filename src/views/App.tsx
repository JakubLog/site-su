import MainTemplate from 'components/templates/MainTemplate';
import AppProviders from 'providers/AppProviders';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default function App(): JSX.Element {
  return (
    <AppProviders>
      <MainTemplate>
        <Switch>
          <Route exact path="/">
            Hello Main
          </Route>
        </Switch>
      </MainTemplate>
    </AppProviders>
  );
}
