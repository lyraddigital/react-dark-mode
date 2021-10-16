import { useState } from 'react';

import { Layout } from 'components/Layout';
import { SlideToggle } from 'components/SlideToggle';
import { InsightsPage } from 'pages';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
      <>
        <Layout isDarkMode={isDarkMode}>
          <InsightsPage isDarkMode={isDarkMode} />
        </Layout>
        <SlideToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      </>    
  );
}

export default App;
