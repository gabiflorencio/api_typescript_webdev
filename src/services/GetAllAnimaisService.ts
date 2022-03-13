import { Animal } from "../models/Animal";
import { IAnimaisRepository } from "../repositories/IAnimaisRepository";


class GetAllAnimaisService{
  private animalRepositorio: IAnimaisRepository;

  constructor(animalRepositorio: IAnimaisRepository){
    this.animalRepositorio = animalRepositorio;
  }

  execute(): Animal[]{
    const animais = this.animalRepositorio.getAllAnimals();

    return animais;
  }

}

export { GetAllAnimaisService }; 