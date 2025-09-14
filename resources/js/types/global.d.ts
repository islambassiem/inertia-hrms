import axios from 'axios';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    axios: typeof axios;
  }
}
