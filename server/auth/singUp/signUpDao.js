import { dbConnection } from '../../database/db';

//TODO add type, in the database default is user
export const insertUser = async userData => {
  const email = userData.email;
  const password = userData.password;
  const name = userData.name;
  const sex = userData.sex;
  const table = 'users';

  const queryResult =  await dbConnection(table).insert({ email: email, name:name, password:password, sex:sex });
  return queryResult.length ? queryResult[0] : null;
};