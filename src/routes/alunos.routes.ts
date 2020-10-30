import {Router} from 'express';
import {getRepository} from 'typeorm';
import CriarAlunoService from '../services/CriarAlunoService';
import Aluno from '../models/aluno';
import multer from 'multer';
import uploadConfig from '../config/upload';

const alunosRouter = Router();
const upload = multer(uploadConfig);


alunosRouter.get('/',async(request,response)=>{
    const alunoRepository = getRepository(Aluno);
    const alunos = await alunoRepository.find();

    return response.json(alunos);
});


alunosRouter.post('/',upload.single('avatar'),async(request,response)=>{    
    try {      

        const {matricula,nome} = request.body; 
        console.log(request);

        const criarAluno = new CriarAlunoService();

        const usuario = await criarAluno.execute({
            matricula,
            nome,
            foto:request.file.filename,
        })

        

        return response.json(usuario); 
        
    } catch (error) {
        return response.status(400).json({erro:error.message});  
    }
      
      
});


export default alunosRouter;