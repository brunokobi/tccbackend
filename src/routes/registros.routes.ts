import {Router} from 'express';
import {parseISO} from 'date-fns';
import RegistroRepository from '../repositories/RegistroRepository';
import CriarRegistroService from '../services/CriarRegistroService';
import {getCustomRepository} from 'typeorm';



const registrosRouter = Router();

// const registroRepository = new RegistroRepository();

registrosRouter.get('/',async(request,response)=>{
    const registroRepository = getCustomRepository(RegistroRepository);
    const registros = await registroRepository.find();

    return response.json(registros);
});

registrosRouter.post('/',async(request,response)=>{ 
    const {matricula,data,local} = request.body;
    
    const parsedDate = parseISO(data);   

    const criarRegistro = new CriarRegistroService();

    const registro = await criarRegistro.execute({matricula,data:parsedDate,local});
    

    return response.json(registro);    
});

export default registrosRouter;