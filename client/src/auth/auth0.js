import auth0 from 'auth0-js';
import { clientID, domain } from '../helpers/CONSTANTS';
export const webAuth = new auth0.WebAuth({
  domain: domain,
  clientID: clientID,
  redirectUri: 'http://localhost:3000/profile',
  responseType: 'code token',
});

export const isAuthenticated = () => {
  return new Promise((resolve, reject) => {
    const localAuth = localStorage.getItem('isAuthenticated');
    let isAuthenticated = false;
    if (localAuth) {
      resolve(localAuth);
    } else {
      webAuth.parseHash((err, authResult) => {
        if (authResult) {
          webAuth.client.userInfo(authResult.accessToken, (err, user) => {
            isAuthenticated = true;
            localStorage.setItem('isAuthenticated', true);
            localStorage.setItem('email', user.email);
            resolve(isAuthenticated);
          });
        } else reject(err);
      });
    }
  });
};
