const CLIENT_ID = process.env.REACT_APP_IDP_CLIENTID || '{clientId}';
const ISSUER = process.env.REACT_APP_IDP_ISSUER || 'https://dev-24446319.okta.com/oauth2/default';
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;
const BACKEND_SCOPE = process.env.BACKEND_SCOPE || 'svc.document-generator'; // ToDo - correct the scope for this app!

let baseUrl;
if (typeof window !== 'undefined') {
  // baseUrl = window.location.protocol + '//' + window.location.host; // (or whatever)
  baseUrl = window.location.origin;
  console.log(baseUrl);
}

const authConfig = {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: `${baseUrl}/login/callback`,
    scopes: ['openid', 'profile', 'email', BACKEND_SCOPE],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
};

export default authConfig;
