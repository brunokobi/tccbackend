import {Router} from 'express';
import AutenticacaoService from '../services/AutenticacaoService';
//teste api
const autenticacaoRouter = Router();


autenticacaoRouter.post('/',async(request,response)=>{ 
    try {
        const {login,senha} =request.body;

        const autenticacaoLogin = new AutenticacaoService();

        const {usuario} = await autenticacaoLogin.execute({
            login,
            senha,
        });

        return response.json({usuario}); 
        
    } catch (error) {
        return response.status(400).json({erro:error.message});  
    }
      
      
});

export default autenticacaoRouter;