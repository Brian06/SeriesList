import * as visualsDao from './visualsDao';

export const getVisuals = async () => {
  const result = await visualsDao.getVisuals();

  if (!result) {
    const error = { type: 'error', msg: 'Cannot find visuals' };
    return error;
  }
  else {
    const success = { type: 'success', result: result };
    return success;
  };
};

export const getVisualById = async visualId => {
  const result = await visualsDao.getVisualById(visualId);

  if (!result) {
    const error = { type: 'error', msg: 'Cannot find visuals' };
    return error;
  }
  else {
    const success = { type: 'success', result: result };
    return success;
  };
};

export const insertVisual = async visual => {
  
  const result = await visualsDao.insertVisual(visual);

  if (!result) {
    const error = { type: 'error', msg: 'Cannot change the visual' };
    return error;
  }
  else {
    const success = { type: 'success', result: 'Visual Inserted' };
    return success;
  };

};

export const updateWholeVisual = async visual => {
  
  const result = await visualsDao.updateWholeVisual(visual);

  if (!result) {
    const error = { type: 'error', msg: 'Cannot update the visual' };
    return error;
  }
  else {
    const success = { type: 'success', result: 'Visual updated' };
    return success;
  };

};

export const deleteVisual = async id => {
  
  const result = await visualsDao.deleteVisual(id);

  if (!result) {
    const error = { type: 'error', msg: 'Cannot delete the visual' };
    return error;
  }
  else {
    const success = { type: 'success', result: 'Visual deleted' };
    return success;
  };

};