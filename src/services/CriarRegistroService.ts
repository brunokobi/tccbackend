import Registro from '../models/registro';
import RegistroRepository from '../repositories/RegistroRepository';
import {getCustomRepository} from 'typeorm';

interface Request{
    matricula:string;
    data:Date;
    local:string;
}

class CriarRegistroService{
    public async execute({matricula,data,local}:Request) :Promise <Registro>{
        const registroRepository = getCustomRepository(RegistroRepository);

        const verificaRegistro = await registroRepository.verificaRegistro(matricula,data,local);
        console.log(verificaRegistro);

        const registro = registroRepository.create({matricula,data,local});

        await registroRepository.save(registro);

        return registro;
    }   
        

}
export default CriarRegistroService;