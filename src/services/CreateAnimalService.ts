import { IAnimaisRepository } from "../repositories/IAnimaisRepository";

interface IRequest{
  nome: string;
  especie: string;
  familia: string;
}

class CreateAnimalService {

  private animalRepositorio: IAnimaisRepository;

  constructor(animalRepositorio: IAnimaisRepository){
    this.animalRepositorio = animalRepositorio;
  }

  execute({nome, especie, familia }: IRequest) {
    const animalAlreadyExists = this.animalRepositorio.findByNome(nome);

    if (animalAlreadyExists) {
      throw new Error("Animal já existe.");
    }

    this.animalRepositorio.create({ nome, especie, familia });
  }
}

export { CreateAnimalService}; 