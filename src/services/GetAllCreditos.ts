import { getRepository } from "typeorm";
import { Credito } from "../entities/Credito";

export class GetAllCreditosService{
    async execute(): Promise<Credito[] | Error>{
        const repo = getRepository(Credito);
        const creditos = await repo.find();
        return creditos;
    }
}