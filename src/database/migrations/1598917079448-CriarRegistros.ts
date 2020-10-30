import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarRegistros1598917079448 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
        new Table({
            name:'registros',
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
                    name:'data',
                    type:'timestamp with time zone',
                    isNullable:false,
                },
                {
                    name:'local',
                    type:'varchar',
                    isNullable:false,
                },
            ]
        })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('registros');
    }

}
