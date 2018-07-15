import { signUp } from './auth/singUp/signUpController';
import { login } from './auth/login/loginController';
import * as visualController from './visuals/visualsController';
import { verifyToken } from './auth/verifyToken'

export const routes = app => {
  app.get('/', (req, res) => res.send('Hello World')); // this is for testing
  app.post('/signUp', signUp);
  app.post('/login', login);

  app.get('/visuals', verifyToken, visualController.getVisuals);
  app.get('/visuals/:_id', verifyToken, visualController.getVisualById);
  app.post('/visuals', verifyToken, visualController.insertVisual);
  app.put('/visuals/:_id', verifyToken, visualController.updateWholeVisual);
  app.patch('/visuals/:_id', verifyToken, visualController.updatePartialVisual);
  app.delete('/visuals/:_id', verifyToken, visualController.deleteVisual);

};