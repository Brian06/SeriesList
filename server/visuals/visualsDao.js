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

export const updateVisual = async visual => {
  const table = 'visuals';

  const queryResult =  await dbConnection(table).where({ id: visual.id }).update({
    actors: visual.actors,
    alternativeTitles: visual.alternativeTitles,
    director: visual.director,
    duration: visual.duration,
    episodes: visual.episodes,
    genres: visual.genres,
    name: visual.name,
    rating: visual.rating,
    realeaseDate: visual.realeaseDate,
    studio: visual.studio,
    synopsis: visual.synopsis,
    type: visual.type
  });
  
  console.log(queryResult)
  return queryResult.length ? queryResult[0] : null;
};
