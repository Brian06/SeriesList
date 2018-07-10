import { dbConnection } from '../../database/db';
import bcrypt from 'bcryptjs';

//TODO add type, in the database default is user
export const verifyUser = async userData => {
  const email = userData.email;
  const password = userData.password;
  const table = 'users';

  const queryResult =  await dbConnection(table).where({ email: email }).select('email', 'password', 'name', 'type', 'id');
  let passwordIsValid = bcrypt.compareSync(password, queryResult[0].password);
  
  return passwordIsValid ? queryResult[0] : null;
};

