import {signUpService} from './signUpService';
import bcrypt from 'bcryptjs';

export const signUp = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  const email = req.body.email;
  const name = req.body.name;
  const type = req.body.type;
  const sex = req.body.sex;

  if (!email || !hashedPassword || !name || !sex || !type) {
    res.send({error: {
      status: 404,
      message: 'You need all the data',
      code: 10,
    }});
    return res;
  };

  const userData = {
    email: email,
    password: hashedPassword,
    name: name,
    type: type,
    sex: sex,
  };

  const result = await signUpService(userData);

  if (result.type == 'error') {
    res.send({error: {status: 400, message: result.msg, code: 10}});
  } else {
    res.send({success: result});
  }
};
