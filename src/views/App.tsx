import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import { useError } from 'hooks/useError';
import { Switch, Route } from 'react-router-dom';
import Error from 'components/molecules/Error/Error';
import Main from './Main/Main';
import Members from './Members/Members';
import Modal from 'components/molecules/Modal/Modal';
import Signin from './Signin/Signin';
import { useAuth } from 'hooks/useAuth';
import Post from './Post/Post';
import Dashboard from './Dashboard/Dashboard';

export default function App(): JSX.Element {
  const { error } = useError();
  const { currentUser } = useAuth();
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
          <Route path="/post/:id">
            <Post />
          </Route>
          {!currentUser ? (
            <Route path="/signin">
              <Signin />
            </Route>
          ) : (
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          )}
        </Switch>
      </MainTemplate>
      <Modal />
      {error && <Error message={error} />}
    </>
  );
}
