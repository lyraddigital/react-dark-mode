import { useState } from 'react';
import { 
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import { Layout } from 'components/Layout';
import { SlideToggle } from 'components/SlideToggle';

import {
  AccountPage,
  InsightsPage,
  NotFoundPage
} from 'pages';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
      <Router>
        <Layout isDarkMode={isDarkMode}>
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
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
        <SlideToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      </Router>    
  );
}

export default App;
