import jwt from 'jsonwebtoken';
import {verifyUser} from './loginDao';
import {secret} from '../../config';

export const loginService = async (userData) => {
  const result = await verifyUser(userData);

  if (!result) {
    const error = {type: 'error', msg: 'Cannot find the user'};
    return error;
  } else {
    const dbEmail = result.email;
    const dbUserId = result.id;
    const dbUsername = result.name;
    const dbUserType = result.type;
    const token = jwt.sign({id: dbUserId}, secret, {expiresIn: 86400});
    const fullObj = {
      email: dbEmail,
      id: dbUserId,
      name: dbUsername,
      type: dbUserType,
      token: token,
    };

    return fullObj;
  };
};
