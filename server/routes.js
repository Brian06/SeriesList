import { signUp } from './auth/singUp/signUpController';

export const routes = app => {
  app.get('/', (req, res) => res.send('What is up ')); // this is for testing
  app.post('/signUp', signUp);

};