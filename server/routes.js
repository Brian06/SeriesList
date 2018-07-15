import { signUp } from './auth/singUp/signUpController';
import { login } from './auth/login/loginController';
import { getVisuals, getVisualById, insertVisual, updateWholeVisual, updatePartialVisual } from './visuals/visualsController';
import { verifyToken } from './auth/verifyToken'

export const routes = app => {
  app.get('/', (req, res) => res.send('Hello World')); // this is for testing
  app.post('/signUp', signUp);
  app.post('/login', login);

  app.get('/visuals', verifyToken, getVisuals);
  app.get('/visuals/:_id', verifyToken, getVisualById);
  app.post('/visuals', verifyToken, insertVisual);
  app.put('/visuals/:_id', verifyToken, updateWholeVisual);
  app.patch('/visuals/:_id', verifyToken, updatePartialVisual);

};