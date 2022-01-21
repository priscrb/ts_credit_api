import { CreateCreditoService } from "../services/CreateCredito";
import { Request, Response } from "express";
import Joi from "joi";
import dotenv from "dotenv"

dotenv.config()


import nodemailer from "nodemailer";

export class CreateCreditoController {







  async handle(request: Request, response: Response){

  const validationSchema = Joi.object({
    token: Joi.string().required(),
    valor: Joi.number().required().greater(0),
    percentual: Joi.number().greater(-1).less(101).required(), // menor igual a 100
    username: Joi.string().required().min(3),
    phone: Joi.string().required().regex(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/),
    cpf: Joi.string().optional().min(11), 
    cnpj: Joi.string().optional().min(14),
    email: Joi.string().required().email(),
    corretorName: Joi.string().required().min(3),
    corretorEmail: Joi.string().required().email(),
  })


    const { token, valor, percentual, username, phone, cpf, cnpj, email, corretorName, corretorEmail } = request.body;

    const service = new CreateCreditoService();

    const result = await service.execute({
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
    });


    // TODO: env
    var transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "47650049e45ba9",
        pass: "5b776231ebe8e3"
      }
    });

    let welcomeEmail = await transporter.sendMail({
      from: '"Netspaces" <adm@netspaces.org>',
      to: email,
      subject: "Confirmação de Credito",
      text: "lorem ipsum",
      html: "<b>Body email confirmacao de credito</b>",
    });

    let internalEmail = await transporter.sendMail({
      from: '"Netspaces" <adm@netspaces.org>',
      to: process.env.INTERNAL_EMAIL_RECEIVER, // TODO: env
      subject: "Um novo cadastro foi realizado",
      text: "lorem ipsum",
      html: "<b>Body email cadastro de credito</b>",
    });

    console.log("Welcome Email sent: %s", welcomeEmail.messageId);
    console.log("Internal Email sent: %s", internalEmail.messageId);

    const { error } = validationSchema.validate(request.body);

    if (error) {
      return response.status(400).json({
        message: error.message,
      });
    }

    

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message });
    }

    return response.json(result);
    
  }
}