import {Router} from 'express';
import {getRepository} from 'typeorm';
import CriarUsuarioService from '../services/CriarUsuarioService';
import Usuario from '../models/usuario';

const usuariosRouter = Router();

usuariosRouter.get('/',async(request,response)=>{
    const usuarioRepository = getRepository(Usuario);
    const usuarios = await usuarioRepository.find();

    return response.json(usuarios);
});

usuariosRouter.post('/',async(request,response)=>{ 
    try {
        const {nome,login,senha} = request.body; 

        const criarUsuario = new CriarUsuarioService();

        const usuario = await criarUsuario.execute({
            nome,
            login,
            senha,
        })

        

        return response.json(usuario); 

    } catch (error) {
       return response.status(400).json({error:error.message}) 
    }
      
});

export default usuariosRouter;