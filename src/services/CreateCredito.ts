import { getRepository } from "typeorm";
import { Credito } from "../entities/Credito";


type CreditoRequest = {
    token: string;
    valor: number;
    percentual: number;
    username: string;
    phone: string;
    cpf: string;
    cnpj: string;
    email: string;
    corretorName: string;
    corretorEmail: string;
}

export class CreateCreditoService {

  async execute({
    token,
    valor,
    percentual,
    username,
    phone,
    cpf,
    cnpj,
    email,
    corretorName,
    corretorEmail,
  }: CreditoRequest): Promise<Credito | Error> {

   

    const repo = getRepository(Credito);

    // token verification
    if (await repo.findOne({ token })) {
      throw new Error("Token already exists");
    }

    const credito = repo.create({
      token,
      valor,
      percentual,
      username,
      phone,
      cpf,
      cnpj,
      email,
      corretorName,
      corretorEmail,
    })

    await repo.save(credito);

    return credito;




  }
}