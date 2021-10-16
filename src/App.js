import { 
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import { Layout } from 'components/Layout';
import { ThemeProvider } from 'components/ThemeProvider';

import {
  AccountPage,
  InsightsPage,
  NotFoundPage
} from 'pages';

function App() {
  return (
      <Router>
        <ThemeProvider>
          <Layout>
            <Switch>
              <Route exact path="/insights">
                <InsightsPage />
              </Route>
              <Route exact path="/account">
                <AccountPage />
              </Route>
              <Route exact path="/">
                <Redirect to="/account" />
              </Route>
              <Route component={NotFoundPage} />
            </Switch>
          </Layout>
        </ThemeProvider>
      </Router>    
  );
}

export default App;
