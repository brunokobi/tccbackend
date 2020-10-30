import {Entity,Column,PrimaryGeneratedColumn} from "typeorm";

@Entity('usuarios')
class usuario{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    nome:string; 

    @Column()
    login:string;   
    
    @Column()
    senha:string;
   
}

export default usuario;