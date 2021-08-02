import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import { useError } from 'hooks/useError';
import { Switch, Route } from 'react-router-dom';
import Error from 'components/molecules/Error/Error';

export default function App(): JSX.Element {
  const { error } = useError();
  return (
    <>
      <MainTemplate>
        <Switch>
          <Route exact path="/">
            Hello Main
          </Route>
        </Switch>
      </MainTemplate>
      {error && <Error message={error} />}
    </>
  );
}
