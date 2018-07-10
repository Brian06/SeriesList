import { loginService } from './loginService'

export const login = async (req, res) => {

  const password = req.body.password;
  const email = req.body.email;

  if (!email || !password) {
    res.send({ error: { status:404, message: 'You need all the data', code: 10 }});
    return res;
  };

  const userData = {
    email: email,
    password: password
  };

  const result = await loginService(userData);

  if (result.type == 'error') 
    res.send({auth: false, error: {status:400, message: result.msg, code: 10}});
  else{
    res.send({ auth: true, token: result.token, email: result.email, id: result.id, name: result.name, type: result.type });
  }
    
};