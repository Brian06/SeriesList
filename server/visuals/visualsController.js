import * as visualsService from './visualsService';

export const getVisuals = async (req, res) => {
  const result = await visualsService.getVisuals();

  if (result.type == 'error') {
    res.send({
      error: {
        status: 400,
        message: result.msg,
      },
    });
  } else {
    res.send(result.result);
  }
};

export const getVisualById = async (req, res) => {
  const visualId = req.params._id;

  if (!visualId) {
    res.send({error: {
      status: 404,
      message: 'You need all the data',
    },
  });
    return res;
  };

  const result = await visualsService.getVisualById(visualId);

  if (result.type == 'error') {
    res.send({error: {
      status: 400,
      message: result.msg,
    },
  });
  } else {
    res.send(result.result);
  }
};

export const insertVisual = async (req, res) => {
  const actors = req.body.actors;
  const alternativeTitles = req.body.alternativeTitles;
  const director = req.body.director;
  const duration = req.body.duration;
  const episodes = req.body.episodes;
  const genres = req.body.genres;
  const name = req.body.name;
  const rating = req.body.rating;
  const realeaseDate = req.body.realeaseDate;
  const studio = req.body.studio;
  const synopsis = req.body.synopsis;
  const type = req.body.type;

  if (!actors || !alternativeTitles || !director || !duration || !episodes ||
    !genres || !name || !rating || !realeaseDate || !studio || !synopsis ||
    !type) {
    res.send({
      error: {
        status: 404,
        message: 'You need all the data',
      },
    });
    return res;
  };

  const visual = {
    actors: actors,
    alternativeTitles: alternativeTitles,
    director: director,
    duration: duration,
    episodes: episodes,
    genres: genres,
    name: name,
    rating: rating,
    realeaseDate: realeaseDate,
    studio: studio,
    synopsis: synopsis,
    type: type,
  };

  const result = await visualsService.insertVisual(visual);

  if (result.type == 'error') {
    res.send({
      error: {
        status: 400,
        message: result.msg,
      },
    });
  } else {
    res.send({sucess: result.result});
  }
};

export const updateWholeVisual = async (req, res) => {
  const id = req.params._id;
  const actors = req.body.actors;
  const alternativeTitles = req.body.alternativeTitles;
  const director = req.body.director;
  const duration = req.body.duration;
  const episodes = req.body.episodes;
  const genres = req.body.genres;
  const name = req.body.name;
  const rating = req.body.rating;
  const realeaseDate = req.body.realeaseDate;
  const studio = req.body.studio;
  const synopsis = req.body.synopsis;
  const type = req.body.type;

  if (!id || !actors || !alternativeTitles || !director || !duration ||
    !episodes || !genres || !name || !rating || !realeaseDate || !studio ||
    !synopsis || !type) {
    res.send({
      error: {
        status: 404,
        message: 'You need all the data',
      },
    });
    return res;
  };

  const visual = {
    id: id,
    actors: actors,
    alternativeTitles: alternativeTitles,
    director: director,
    duration: duration,
    episodes: episodes,
    genres: genres,
    name: name,
    rating: rating,
    realeaseDate: realeaseDate,
    studio: studio,
    synopsis: synopsis,
    type: type,
  };

  const result = await visualsService.updateWholeVisual(visual);

  if (result.type == 'error') {
    res.send({
      error: {
        status: 400,
        message: result.msg,
      },
    });
  } else {
    res.send({sucess: result.result});
  }
};

export const updatePartialVisual = async (req, res) => {
  const id = req.params._id;

  if (!id) {
    res.send({
      error: {
        status: 404,
        message: 'You need an id',
      },
    });
    return res;
  };

  const result = await visualsService.updatePartialVisual(id, req.body);

  if (result.type == 'error') {
    res.send({
      error: {
        status: 400,
        message: result.msg,
      },
    });
  } else {
    res.send({sucess: result.result});
  }
};

export const deleteVisual = async (req, res) => {
  const id = req.params._id;

  if (!id) {
    res.send({
      error: {
        status: 404,
        message: 'You need an id',
      },
    });
    return res;
  };

  const result = await visualsService.deleteVisual(id);

  if (result.type == 'error') {
    res.send({
      error: {
        status: 400,
        message: result.msg,
      },
    });
  } else {
    res.send({sucess: result.result});
  }
};

export const addVisualToUser = async (req, res) => {
  const idVisual = req.params._idVisual;
  const idUser = req.params._idUser;

  if (!idVisual || !idUser) {
    res.send({
      error: {
        status: 404,
        message: 'You need the two ids',
      },
    });
    return res;
  };

  const result = await visualsService.addVisualToUser(idVisual, idUser);

  if (result.type == 'error') {
    res.send({
      error: {
        status: 400,
        message: result.msg,
      },
    });
  } else {
    res.send({sucess: result.result});
  }
};

export const getVisualsByUserId = async (req, res) => {
  const idUser = req.params._idUser;

  if (!idUser) {
    res.send({
      error: {
        status: 404,
        message: 'You need the user id',
      },
    });
    return res;
  };

  const result = await visualsService.getVisualsByUserId(idUser);

  if (result.type == 'error') {
    res.send({
      error: {
        status: 400,
        message: result.msg,
      },
    });
  } else {
    res.send({sucess: result.result});
  }
};
