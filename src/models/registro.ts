import {Entity,Column,PrimaryGeneratedColumn} from "typeorm";

@Entity('registros')
class registro{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    matricula:string;
    
    @Column('timestamp with time zone')
    data:Date;
    
    @Column()
    local:string;
   
}

export default registro;