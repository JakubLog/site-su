import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Wrapper, Body } from './Dashboard.styles';
import { db } from '../../firebase';
import DashboardBar from 'components/organisms/DashboardBar/DashboardBar';
import { useAuth } from 'hooks/useAuth';
import { Bold } from 'components/atoms/Bold/Bold';
import Description from './Description/Description';

interface userProps {
  id: string;
  name: string;
  code: string;
  description: string;
}

const Dashboard = (): JSX.Element => {
  const { currentUser: authUser } = useAuth();
  const [isLoading, setLoadingState] = useState(true);
  const [user, setUser] = useState<userProps | null>(null);

  useEffect(() => {
    db.collection('members')
      .where('Email', '==', authUser.email)
      .onSnapshot((docs) =>
        docs.forEach((doc) => {
          setUser({ id: doc.id, name: doc.get('Name'), code: doc.get('Code'), description: doc.get('Description') });
        })
      );
    setLoadingState(false);
    console.log(user);
  }, []);

  return (
    <Wrapper>
      <DashboardBar name={isLoading ? 'Loading...' : user?.name} />
      <Body>
        <Switch>
          <Route path="/dashboard/" exact>
            Twój kod awaryjny: <Bold>{isLoading ? 'Loading...' : user?.code}</Bold>
            <Description about={user?.description} docId={user?.id} />
          </Route>
          <Route path="/dashboard/forms">
            Jeżeli pierwszy raz spotykasz się z generowaniem ankiet dla naszej strony, skontaktuj się wpierw z administratorem witryny w celu
            przekazania instrukcji. Aby stworzyć ankietę:
            <ul>
              <li>Skorzystaj z generatora ankiet - Tally.so</li>
              <li>Zaloguj się do zewnętrzego serwisu powiązanego z naszą stroną za pomocą podanych danych - GraphCMS</li>
              <li>Spośród typów, wybierz typ “Form” w którym możesz podać wszystkie potrzebne dane.</li>
              <li>Zapisz zmiany i opublikuj.</li>
              <li>Sprawdź stronę główną i gotowe!</li>
            </ul>
          </Route>
          <Route path="/dashboard/posts">
            Jeżeli pierwszy raz spotykasz się z dodawaniem postów dla naszej strony, skontaktuj się wpierw z administratorem witryny w celu
            przekazania instrukcji. Aby stworzyć post:
            <ul>
              <li>Zaloguj się do zewnętrzego serwisu powiązanego z naszą stroną za pomocą podanych danych - GraphCMS</li>
              <li>Spośród typów, wybierz typ “Post” w którym możesz podać wszystkie potrzebne dane.</li>
              <li>Zapisz zmiany i opublikuj.</li>
              <li>Sprawdź stronę główną i gotowe!</li>
            </ul>
          </Route>
        </Switch>
      </Body>
    </Wrapper>
  );
};

export default Dashboard;
