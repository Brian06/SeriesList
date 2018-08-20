import {dbConnection} from '../../database/db';
import bcrypt from 'bcryptjs';

// TODO add type, in the database default is user
export const verifyUser = async (userData) => {
  const email = userData.email;
  const password = userData.password;
  const table = 'users';
  let queryResult = null;

  try {
    queryResult = await dbConnection(table).where({email: email})
    .select('email', 'password', 'name', 'type', 'id');
  } catch (e) {
    return null;
  }

  let passwordIsValid = bcrypt.compareSync(password, queryResult[0].password);

  return passwordIsValid ? queryResult[0] : null;
};

