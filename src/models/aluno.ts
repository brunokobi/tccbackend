import {Entity,Column,PrimaryGeneratedColumn} from "typeorm";

@Entity('alunos')
class aluno{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    matricula:string;
    
    @Column()
    nome:string;
    
    @Column()
    foto:string;
   
}

export default aluno;