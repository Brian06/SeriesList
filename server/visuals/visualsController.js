import { getAllVisuals } from './visualsService'

export const getVisuals = async (req, res) => {

  const result = await getAllVisuals(userData);

  if (result.type == 'error') 
    res.send({auth: false, error: { status:400, message: result.msg, code: 10 }});
  else{
    res.send({ auth: true, token: result.token, email: result.email, id: result.id, name: result.name, type: result.type });
  }
    
};