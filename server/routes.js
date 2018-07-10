import { signUp } from './auth/singUp/signUpController';
import { login } from './auth/login/loginController';

export const routes = app => {
  app.get('/', (req, res) => res.send('What is up ')); // this is for testing
  app.post('/signUp', signUp);
  app.post('/login', login)

};