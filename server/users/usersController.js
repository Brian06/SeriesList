import * as usersService from './usersServices';
import bcrypt from 'bcryptjs';

export const getUsers = async (req, res) => {

  const result = await usersService.getUsers();

  if (result.type == 'error') 
    res.send({ error: { status:400, message: result.msg, code: 10 }});
  else{
    res.send(result.result);
  }
    
};

export const getUserById = async (req, res) => {

  const userId = req.params._id;
  
  if (!userId) {
    res.send({ error: { status:404, message: 'You need all the data', code: 10 }});
    return res;
  };

  const result = await usersService.getUserById(userId);

  if (result.type == 'error') 
    res.send({ error: { status:400, message: result.msg, code: 10 }});
  else{
    res.send(result.result);
  }
    
};

export const updateWholeUser = async (req, res) => {
  
  const id = req.params._id;
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  const email = req.body.email;
  const name = req.body.name;
  const type = req.body.type;
  const sex = req.body.sex;

  if ( !id || !email || !hashedPassword || !name || !type || !sex) {
    res.send({ error: { status:404, message: 'You need all the data', code: 10 }});
    return res;
  };

  const userData = {
    id: id,
    email: email,
    password: hashedPassword,
    name: name,
    type: type,
    sex: sex
  };

  const result = await usersService.updateWholeUser(userData);

  if (result.type == 'error') 
    res.send({ error: { status:400, message: result.msg, code: 10 }});
  else 
    res.send({ success: result });
    
};


export const updatePartialUser = async (req, res) => {

  const id = req.params._id;
  
  if (!id) {
    res.send({ error: { status:404, message: 'You need an id', code: 10 }});
    return res;
  };

  const result = await usersService.updatePartialUser(id, req.body);

  if (result.type == 'error') 
    res.send({ error: { status:400, message: result.msg, code: 10 }});
  else{
    res.send({ sucess: result.result });
  }
    
};

export const deleteUser = async (req, res) => {

  const id = req.params._id;
  
  if (!id) {
    res.send({ error: { status:404, message: 'You need an id', code: 10 }});
    return res;
  };

  const result = await usersService.deleteUser(id);

  if (result.type == 'error') 
    res.send({ error: { status:400, message: result.msg, code: 10 }});
  else{
    res.send({ sucess: result.result });
  }
    
};