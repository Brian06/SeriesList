import { getVisuals, getVisualById, insertVisual } from './visualsDao';

export const getAllVisuals = async () => {
  const result = await getVisuals();

  if (!result) {
    const error = { type: 'error', msg: 'Cannot find visuals' };
    return error;
  }
  else {
    const success = { type: 'success', result: result };
    return success;
  };
};

export const getVisual = async visualId => {
  const result = await getVisualById(visualId);

  if (!result) {
    const error = { type: 'error', msg: 'Cannot find visuals' };
    return error;
  }
  else {
    const success = { type: 'success', result: result };
    return success;
  };
};

export const addNewVisual = async visual => {
  
  const result = await insertVisual(visual);

  if (!result) {
    const error = { type: 'error', msg: 'Cannot change the visual' };
    return error;
  }
  else {
    const success = { type: 'success', result: 'Visual Inserted' };
    return success;
  };

};