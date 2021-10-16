import { Layout } from 'components/Layout';

import { ThemeProvider } from 'components/ThemeProvider';
import { InsightsPage } from 'pages';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <InsightsPage />
      </Layout>
    </ThemeProvider>   
  );
}

export default App;
