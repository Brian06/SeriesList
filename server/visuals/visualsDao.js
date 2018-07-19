import { dbConnection } from '../database/db';

export const getVisuals = async () => {

  const queryResult =  await dbConnection.select(dbConnection.raw('AVG(uv.score::float) as averageScore'),
  dbConnection.raw("count(case when uv.favorite = 'true' then 1 else null end) as numFavorites"),
  dbConnection.raw("count(case when uv.score != 0 then 1 else null end) as numScored"),'v.name', 
  'v.id', 'v.name', 'v.episodes', 'v.type', 'v.actors', 'v.alternativetitles', 'v.director', 'v.genres',
  'v.rating', 'v.realeasedate', 'v.studio', 'v.synopsis', 'v.duration')
  .from('visuals as v').leftJoin('uservisuals as uv', 'uv.idvisuals', 'v.id')
  .groupByRaw('v.id')


  return queryResult.length ? queryResult : null;
};

export const getVisualById = async visualId => {

  const queryResult =  await dbConnection.where({'v.id':visualId})
  .select(dbConnection.raw('AVG(uv.score::float) as averageScore'),
  dbConnection.raw("count(case when uv.favorite = 'true' then 1 else null end) as numFavorites"),
  dbConnection.raw("count(case when uv.score != 0 then 1 else null end) as numScored"),'v.name', 
  'v.id', 'v.name', 'v.episodes', 'v.type', 'v.actors', 'v.alternativetitles', 'v.director', 'v.genres',
  'v.rating', 'v.realeasedate', 'v.studio', 'v.synopsis', 'v.duration')
  .from('visuals as v').leftJoin('uservisuals as uv', 'uv.idvisuals', 'v.id')
  .groupByRaw('v.id')
  
  return queryResult.length ? queryResult[0] : null;
};

export const insertVisual = async visual => {
  const actors = visual.actors;
  const alternativeTitles = visual.alternativeTitles;
  const director = visual.director;
  const duration = visual.duration;
  const episodes = visual.episodes;
  const genres = visual.genres;
  const name = visual.name;
  const rating = visual.rating;
  const realeaseDate = visual.realeaseDate;
  const studio = visual.studio;
  const synopsis = visual.synopsis;
  const type = visual.type;
  const table = 'visuals';

  const queryResult =  await dbConnection(table).insert({
    actors: actors,
    alternativetitles: alternativeTitles,
    director: director,
    duration: duration,
    episodes: episodes,
    genres: genres,
    name: name,
    rating: rating,
    realeasedate: realeaseDate,
    studio: studio,
    synopsis: synopsis,
    type: type
  });
  
  return queryResult.rowCount>0 ? true : false;
};

export const updateWholeVisual = async visual => {
  
  const id = visual.id;
  const actors = visual.actors;
  const alternativeTitles = visual.alternativeTitles;
  const director = visual.director;
  const duration = visual.duration;
  const episodes = visual.episodes;
  const genres = visual.genres;
  const name = visual.name;
  const rating = visual.rating;
  const realeaseDate = visual.realeaseDate;
  const studio = visual.studio;
  const synopsis = visual.synopsis;
  const type = visual.type;
  const table = 'visuals';

  const queryResult =  await dbConnection(table).where('id', id).update({
    actors: actors,
    alternativetitles: alternativeTitles,
    director: director,
    duration: duration,
    episodes: episodes,
    genres: genres,
    name: name,
    rating: rating,
    realeasedate: realeaseDate,
    studio: studio,
    synopsis: synopsis,
    type: type
  })
  
  return queryResult>0 ? true : false;
};

export const updatePartialVisual = async (id,body) => {
  
  const table = 'visuals';

  const queryResult =  await dbConnection(table).where('id', id).update(body);
  
  return queryResult>0 ? true : false;
};

export const deleteVisual = async id => {
  
  const table = 'visuals';

  const queryResult =  await dbConnection(table).where('id', id).del();
  console.log(queryResult);
  
  return queryResult>0 ? true : false;
};

export const addVisualToUser = async (idVisual,idUser) => {
  
  const table = 'uservisuals';

  const queryResult =  await dbConnection(table).insert({ idvisuals:idVisual, iduser:idUser });
  
  return queryResult.rowCount>0 ? true : false;
};

export const getVisualsByUserId = async (idUser) => {
  
  const table = 'uservisuals';

  //const queryResult =  await dbConnection(table).insert({ idVisuals:idVisual, idUser:idUser });
  //console.log(queryResult);
  
  //return queryResult>0 ? true : false;
};



