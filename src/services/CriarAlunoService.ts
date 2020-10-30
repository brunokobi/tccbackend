import {getRepository} from 'typeorm';
import Aluno from '../models/aluno';

interface Request{
    matricula:string;
    nome:string;
    foto:string;
}

class CriarAlunoService{
    public async execute({matricula,nome,foto}:Request) :Promise <Aluno>{
        const alunoRepository = getRepository(Aluno);

        const verificaAluno = await alunoRepository.findOne({
            where:{matricula},
        });

        if(verificaAluno){
            throw new Error('Aluno já está cadastrado');
        }       
        

        const aluno = alunoRepository.create({matricula,nome,foto});

        await alunoRepository.save(aluno);       

        return aluno;
    }   
        

}
export default CriarAlunoService;