import {Router} from 'express';
import { CreateCreditoController } from './controllers/CreateCreditoController';
import { DeleteCreditoController } from './controllers/DeleteCreditoController';
import { GetAllCreditosController } from './controllers/GetAllCreditosController';
import { UpdateCreditoController } from './controllers/UpdateCreditoController';

const routes = Router()

routes.post("/credito", new CreateCreditoController().handle)
routes.get("/credito", new GetAllCreditosController().handle)
routes.delete("/credito/:id", new DeleteCreditoController().handle)
routes.put("/credito/:id", new UpdateCreditoController().update)
export {routes}