import { signUp } from './auth/singUp/signUpController';
import { login } from './auth/login/loginController';
import { verifyToken } from './auth/verifyToken'
import * as visualsController from './visuals/visualsController';
import * as usersController from './users/usersController';

export const routes = app => {
  app.get('/', (req, res) => res.send('Hello World')); // this is for testing
  app.post('/signUp', signUp);
  app.post('/login', login);

  app.get('/visuals', verifyToken, visualsController.getVisuals);
  app.get('/visuals/:_id', verifyToken, visualsController.getVisualById);
  app.post('/visuals', verifyToken, visualsController.insertVisual);
  app.put('/visuals/:_id', verifyToken, visualsController.updateWholeVisual);
  app.patch('/visuals/:_id', verifyToken, visualsController.updatePartialVisual);
  app.delete('/visuals/:_id', verifyToken, visualsController.deleteVisual);

  app.get('/users', verifyToken, usersController.getUsers);
  app.get('/users/:_id', verifyToken, usersController.getUserById);
  app.put('/users/:_id', verifyToken, usersController.updateWholeUser);
  app.patch('/users/:_id', verifyToken, usersController.updatePartialUser);
  app.delete('/users/:_id', verifyToken, usersController.deleteUser);

};