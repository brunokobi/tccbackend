import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CriarAluno1599075770301 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
        new Table({
            name:'alunos',
            columns:[
                {
                    name:'id',
                    type:'varchar',
                    isPrimary:true,
                    generationStrategy:'uuid',
                    default:'uuid_generate_v4()',
                },
                {
                    name:'matricula',
                    type:'varchar',
                    isNullable:false,
                },  
                {
                    name:'nome',
                    type:'varchar',
                    isNullable:false,
                },                             
                {
                    name:'foto',
                    type:'varchar',
                    isNullable:false,
                },
            ]
        })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('alunos');
    }

}
