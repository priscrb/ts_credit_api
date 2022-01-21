import { Request, Response } from "express";
import { GetAllCreditosService } from "../services/GetAllCreditos";

export class GetAllCreditosController {
  async handle(request: Request, response: Response) {

    const service = new GetAllCreditosService();

    const creditos = await service.execute()
    return response.json(creditos);
  }
}