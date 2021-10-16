import { useState } from 'react';
import { 
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import { Layout } from 'components/Layout';

import { AccountPage } from './pages/Account/AccountPage';
import { InsightsPage } from './pages/Insights/InsightsPage';
import { NotFound } from './pages/NotFound/NotFound';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
      <Router>
        <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
          <Switch>
            <Route exact path="/insights">
              <InsightsPage isDarkMode={isDarkMode} />
            </Route>
            <Route exact path="/account">
              <AccountPage isDarkMode={isDarkMode} />
            </Route>
            <Route exact path="/">
              <Redirect to="/account" />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>    
  );
}

export default App;
