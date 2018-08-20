import {insertUser} from './signUpDao';

export const signUpService = async (userData) => {
  const result = await insertUser(userData);

  if (!result) {
    const error = {type: 'error', msg: 'Cannot insert the new user'};
    return error;
  } else {
    const inserted = {success: true, message: 'User Inserted!'};
    return inserted;
  };
};
