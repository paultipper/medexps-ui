import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { useOktaAuth } from '@okta/okta-react';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';

const App = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const routing = useRoutes(routes(authState.isAuthenticated, oktaAuth));

  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {routing}
      </ThemeProvider>
  );
};

export default App;
