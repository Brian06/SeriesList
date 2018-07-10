import { dbConnection } from '../database/db';

export const getVisuals = async () => {
  const table = 'visuals';

  const queryResult =  await dbConnection(table).select('*');
  
  return queryResult.length ? queryResult : null;
};