import {MigrationInterface, QueryRunner} from "typeorm";

export class Supplier1659572792621 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {


        await queryRunner.createTable(new Table({
            name: 'employee',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'desctiption',
                    type: 'varchar',
                },
                ,
                {
                    name: 'city',
                    type: 'varchar',
                },
                ,
                {
                    name: 'address',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ],
        }),
        );



    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
