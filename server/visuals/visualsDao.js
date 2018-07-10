import { dbConnection } from '../database/db';

export const getVisuals = async () => {
  const table = 'visuals';

  const queryResult =  await dbConnection(table).select('*');

  return queryResult.length ? queryResult : null;
};

export const getVisualById = async visualId => {
  const table = 'visuals';

  const queryResult =  await dbConnection(table).where({ id: visualId }).select('*');
  
  return queryResult.length ? queryResult[0] : null;
};
