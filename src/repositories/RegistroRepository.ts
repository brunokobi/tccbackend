import Registro from '../models/registro';
import {EntityRepository,Repository} from 'typeorm';


@EntityRepository(Registro)
class RegistroRepository extends Repository<Registro>{

    // validação do registro 
    public async verificaRegistro(matricula:string,data:Date,local:string):Promise<Registro | null>{
        const findRegistro = await this.findOne({
            where:{matricula,local}
        });
        return findRegistro || null;
    }    
    
}
export default RegistroRepository;