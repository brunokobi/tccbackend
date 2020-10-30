import {Router} from 'express';
import alunosRouter from './alunos.routes';
import registrosRouter from './registros.routes';
import usuariosRouter from './usuarios.routes';
import autenticacaoRouter from './autenticacao.routes';

const routes = Router();

routes.use('/alunos', alunosRouter);
routes.use('/registros', registrosRouter);
routes.use('/usuarios', usuariosRouter);
routes.use('/autenticacao',autenticacaoRouter);
  

export default routes;