import { dbConnection } from '../../database/db';

//TODO add type, in the database default is user
export const insertUser = async userData => {
  const email = userData.email;
  const password = userData.password;
  const name = userData.name;
  const type = userData.type;
  const sex = userData.sex;
  const table = 'users';
  let queryResult = null;

  try {
    queryResult =  await dbConnection(table).insert({ 
      email: email, 
      name:name, 
      password:password, 
      type:type, sex:sex 
    });
  } catch(e) {
    return false;
  }
  
  return queryResult.rowCount>0 ? true : false;
};