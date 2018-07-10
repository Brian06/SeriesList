import { getAllVisuals, getVisual } from './visualsService'

export const getVisuals = async (req, res) => {

  const result = await getAllVisuals();

  if (result.type == 'error') 
    res.send({ error: { status:400, message: result.msg, code: 10 }});
  else{
    res.send(result.result);
  }
    
};

export const getVisualById = async (req, res) => {

  const visualId = req.params._id;
  
  if (!visualId) {
    res.send({ error: { status:404, message: 'You need all the data', code: 10 }});
    return res;
  };

  const result = await getVisual(visualId);

  if (result.type == 'error') 
    res.send({ error: { status:400, message: result.msg, code: 10 }});
  else{
    res.send(result.result);
  }
    
};