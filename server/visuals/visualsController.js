import { getAllVisuals } from './visualsService'

export const getVisuals = async (req, res) => {

  const result = await getAllVisuals();

  if (result.type == 'error') 
    res.send({ error: { status:400, message: result.msg, code: 10 }});
  else{
    res.send(result.result);
  }
    
};