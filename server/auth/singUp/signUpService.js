import { insertUser } from './signUpDao';

export const signUpService = async userData => {
  const result = await insertUser(userData);

  console.log(result)

  if (result) {
    const error = { type: 'error', msg: 'Cannot find user/password' };
    return error;
  }
  else {
    const inserted = { type: 'success', msg: 'User inserted' };
    return inserted;
  };
};