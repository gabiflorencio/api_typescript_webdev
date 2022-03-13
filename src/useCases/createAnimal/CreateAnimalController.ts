import { Request, Response } from "express";
import { CreateAnimalService } from "../../services/CreateAnimalService";


class CreateAnimalController{
  private createAnimalService: CreateAnimalService;

  constructor(createAnimalService: CreateAnimalService){
    this.createAnimalService = createAnimalService;
  }

  handle(request: Request, response: Response): Response{
    const { nome, especie, familia } = request.body;

    this.createAnimalService.execute({nome, especie, familia });

    return response.status(201).send("Criado com sucesso.");
  }
}

export { CreateAnimalController }; 