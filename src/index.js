import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Security } from '@okta/okta-react';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import * as serviceWorker from './serviceWorker';
import App from './App';
import authConfig from './authConfig';

Amplify.configure(awsExports);

ReactDOM.render(
  <BrowserRouter>
    <Security {...authConfig.oidc}>
      <App />
    </Security>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
