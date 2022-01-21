import { getRepository } from "typeorm";
import { Credito } from "../entities/Credito";

export class DeleteCreditoService {
    async execute(id: string): Promise<void | Error> {
        
        const repo = getRepository(Credito);

        
        if (!(await repo.findOne(id) )){
            return new Error("Credito not found");
        }

        await repo.delete(id);
    }
}