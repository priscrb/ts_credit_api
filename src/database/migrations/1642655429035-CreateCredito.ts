import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCredito1642655429035 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            
            new Table({
                name: 'credito',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'token',
                        type: 'varchar',
                        isNullable: false, 
                        isUnique: true,
                    },
                    {
                        name: 'valor',
                        type: 'decimal',
                        isNullable: false,
                    },
                    {
                        name: 'percentual',
                        type: 'decimal',
                        isNullable: false,
                    },
                    {
                        name: 'username',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'cpf',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'cnpj',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'corretorName',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'corretorEmail',
                        type: 'varchar',
                        isNullable: false,
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('credito');
    }

}
