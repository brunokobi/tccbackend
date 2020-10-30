import {getRepository} from 'typeorm';
import {hash} from 'bcryptjs';
import Usuario from '../models/usuario';

interface Request{
    nome:string;
    login:string;
    senha:string;
}

class CriarUsuarioService{
    public async execute({nome,login,senha}:Request) :Promise <Usuario>{
        const usuarioRepository = getRepository(Usuario);

        const verificaUsuario = await usuarioRepository.findOne({
            where:{login},
        });

        if(verificaUsuario){
            throw new Error('Usuário já está cadastrado');
        }

        //criptografia da senha pra salva no banco
        const hashSenha = await hash(senha,8)
        

        const usuario = usuarioRepository.create({nome,login,senha:hashSenha});

        await usuarioRepository.save(usuario);

        return usuario;
    }   
        

}
export default CriarUsuarioService;