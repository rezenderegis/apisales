import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Sales1654451673570 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
   
       await queryRunner.createTable(new Table({
           name: 'sales',
           columns: [
               {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()'
               },
               {
                   name: 'sales_date',
                   type: 'timestamp',
                   default: 'now()'
               },
               {
                   name: 'id_customer',
                   type: 'varchar',
               },
               {
                   name: 'description',
                   type: 'varchar'
               },
               {
                   name: 'status',
                   type: 'char'
               }
           ]

       }),
       );
   
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
