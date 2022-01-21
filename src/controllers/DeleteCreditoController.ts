import {Request, Response} from 'express';
import { DeleteCreditoService } from '../services/DeleteCreditoService';

export class DeleteCreditoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteCreditoService();
    
    const result = await service.execute(id)

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message });
    }


    return response.status(204).end();
  }
}