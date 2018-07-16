import * as usersDao from './usersDao';

export const getUsers = async () => {
  const result = await usersDao.getUsers();

  if (!result) {
    const error = { type: 'error', msg: 'Cannot find users' };
    return error;
  }
  else {
    const success = { type: 'success', result: result };
    return success;
  };
};

export const getUserById = async userId => {

  const result = await usersDao.getUserById(userId);

  if (!result) {
    const error = { type: 'error', msg: 'Cannot find visuals' };
    return error;
  }
  else {
    const success = { type: 'success', result: result };
    return success;
  };

};

export const updateWholeUser = async userData => {
  
  const result = await usersDao.updateWholeUser(userData);

  if (!result) {
    const error = { type: 'error', msg: 'Cannot update the user' };
    return error;
  }
  else {
    const success = { type: 'success', result: 'User updated' };
    return success;
  };

};

export const deleteUser = async id => {
  
  const result = await usersDao.deleteUser(id);

  if (!result) {
    const error = { type: 'error', msg: 'Cannot delete the visual' };
    return error;
  }
  else {
    const success = { type: 'success', result: 'Visual deleted' };
    return success;
  };

};