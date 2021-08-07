import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import { useError } from 'hooks/useError';
import { Switch, Route } from 'react-router-dom';
import Error from 'components/molecules/Error/Error';
import Main from './Main/Main';
import Members from './Members/Members';
import Modal from 'components/molecules/Modal/Modal';
import Sigin from './Signin/Signin';

export default function App(): JSX.Element {
  const { error } = useError();
  return (
    <>
      <MainTemplate>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/members">
            <Members />
          </Route>
          <Route path="/signin">
            <Sigin />
          </Route>
        </Switch>
      </MainTemplate>
      <Modal />
      {error && <Error message={error} />}
    </>
  );
}
