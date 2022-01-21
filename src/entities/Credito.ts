import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("credito")
export class Credito {
    static findById(id: string) {
      throw new Error('Method not implemented.');
    }
    
    @PrimaryColumn()
    id: string;

    @Column()
    token: string;

    @Column()
    valor: number;

    @Column()
    percentual: number;

    @Column()
    username: string;

    @Column()
    phone: string;

    @Column()
    cpf: string;

    @Column()
    cnpj: string;

    @Column()
    email: string;

    @Column()
    corretorName: string;

    @Column()
    corretorEmail: string;

    constructor() {
      if (!this.id) {
        this.id = uuid()
      }
    }
}