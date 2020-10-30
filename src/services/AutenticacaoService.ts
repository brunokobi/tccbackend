import {getRepository} from 'typeorm';
import {compare} from 'bcryptjs';
import Usuario from '../models/usuario';

interface Request {
    login:string;
    senha:string;
}

interface Response {
    usuario:Usuario;    
}

class AutenticacaoService {
    public async execute({login,senha}:Request):Promise<Response>{
        const usuariosRepository = getRepository(Usuario);

        //verificação do login existente
        const usuario = await usuariosRepository.findOne({
            where:{login}
        });

        if(!usuario){
            throw new Error("login incorreto!!");
        }

        const verificaSenha = await compare(senha,usuario.senha); 

        if(!verificaSenha){
            throw new Error("senha incorreta!!");
        }
        return{usuario};
    }
}
export default AutenticacaoService;