import { signUp } from './auth/singUp/signUpController';
import { login } from './auth/login/loginController';
import { getVisuals, getVisualById } from './visuals/visualsController';
import { verifyToken } from './auth/verifyToken'

export const routes = app => {
  app.get('/', (req, res) => res.send('What is up ')); // this is for testing
  app.post('/signUp', signUp);
  app.post('/login', login);
  app.get('/visuals', verifyToken, getVisuals);
  app.get('/visuals/:_id', verifyToken, getVisualById);

};