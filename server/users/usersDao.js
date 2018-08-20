import {dbConnection} from '../database/db';

export const getUsers = async () => {
  const table = 'users';
  let queryResult = null;

  try {
    queryResult = await dbConnection(table).select('*');
  } catch (e) {
    return null;
  }

  return queryResult.length ? queryResult : null;
};

export const getUserById = async (userId) => {
  const table = 'users';
  let queryResult = null;

  try {
    queryResult = await dbConnection(table).where({id: userId}).select('*');
  } catch (e) {
    return null;
  }

  return queryResult.length ? queryResult[0] : null;
};

export const updateWholeUser = async (userData) => {
  const id = userData.id;
  const email = userData.email;
  const password = userData.password;
  const name = userData.name;
  const type = userData.type;
  const sex = userData.sex;
  const table = 'users';
  let queryResult = false;

  try {
    queryResult = await dbConnection(table).where('id', id).update({
      email: email,
      password: password,
      name: name,
      type: type,
      sex: sex,
    });
  } catch (e) {
    return false;
  }
  return queryResult ? true : false;
};

export const updatePartialUser = async (id, body) => {
  const table = 'users';
  let queryResult = null;

  try {
    queryResult = await dbConnection(table).where('id', id).update(body);
  } catch (e) {
    return false;
  }

  return queryResult>0 ? true : false;
};

export const deleteUser = async (id) => {
  const table = 'users';
  let queryResult = null;

  try {
    queryResult = await dbConnection(table).where('id', id).del();
  } catch (e) {
    return false;
  }

  return queryResult>0 ? true : false;
};
