import { getVisuals, getVisualById } from './visualsDao';

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