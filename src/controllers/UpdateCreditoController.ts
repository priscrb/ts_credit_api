import { Request, Response } from "express";
import { UpdateCreditoService } from "../services/UpdateCreditoService";

export class UpdateCreditoController {
  async update(request: Request, response: Response) {
    const {id} = request.params;

    const { 
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
    } = request.body;

    const service = new UpdateCreditoService();

    const result = await service.execute({
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
    })

    if (result instanceof Error) {
      return response.status(400).json({
        message: result.message,
      });
    }

    return response.json(result);
  }
}