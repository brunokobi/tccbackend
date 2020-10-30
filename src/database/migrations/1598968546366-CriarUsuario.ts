import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CriarUsuario1598968546366 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
        new Table({
            name:'usuarios',
            columns:[
                {
                    name:'id',
                    type:'varchar',
                    isPrimary:true,
                    generationStrategy:'uuid',
                    default:'uuid_generate_v4()',
                },
                {
                    name:'nome',
                    type:'varchar',
                    isNullable:false,
                },
                {
                    name:'login',
                    type:'varchar',
                    isNullable:false,
                },                
                {
                    name:'senha',
                    type:'varchar',
                    isNullable:false,
                },
            ]
        })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios');
    }

}
