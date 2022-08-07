import Service from '@ember/service';
import ENV from 'books/config/environment';

export default Service.extend({
  writeError(error) {
    const authSession = JSON.parse(window.localStorage['ember_simple_auth-session']);
    return fetch(`${ENV.backendUrl}/errors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${authSession.authenticated.token}`
      },
      body: JSON.stringify(error)
    })
  }
});
