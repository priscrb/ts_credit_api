import { getRepository } from "typeorm";
import { Credito } from "../entities/Credito";

type CreditoUpdateRequest = {
    id: string;
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

export class UpdateCreditoService {

  async execute({
    id,
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
  }: CreditoUpdateRequest): Promise<Credito | Error> {

   

    const repo = getRepository(Credito);

    const credito = await repo.findOne(id);

    if (!credito) {
      throw new Error("Credito not found");
    }
    
    credito.token = token ? token : credito.token;
    credito.valor = valor ? valor : credito.valor;
    credito.percentual = percentual ? percentual : credito.percentual;
    credito.username = username ? username : credito.username;
    credito.phone = phone ? phone : credito.phone;
    credito.cpf = cpf ? cpf : credito.cpf;
    credito.cnpj = cnpj ? cnpj : credito.cnpj;
    credito.email = email ? email : credito.email;
    credito.corretorName = corretorName ? corretorName : credito.corretorName;
    credito.corretorEmail = corretorEmail ? corretorEmail : credito.corretorEmail;

    await repo.save(credito);

    return credito;
  }
}