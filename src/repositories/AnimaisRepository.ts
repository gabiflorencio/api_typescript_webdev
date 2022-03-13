import { Animal } from "../models/Animal";
import { ICreateAnimalDTO, IAnimaisRepository } from "../repositories/IAnimaisRepository";

class AnimaisRepository implements IAnimaisRepository{
  private animais : Animal[];

  private static INSTANCE: AnimaisRepository;

  private constructor(){
    this.animais = [];
  }

  public static getInstance(){
    if(!AnimaisRepository.INSTANCE){
        AnimaisRepository.INSTANCE =  new AnimaisRepository();
    }

    return AnimaisRepository.INSTANCE;
  }

  create({ nome, especie, familia }: ICreateAnimalDTO){
    const animalNovo = new Animal();

    Object.assign(animalNovo, {
        nome,
        especie,
        familia
    });

    this.animais.push(animalNovo);
  }

  getAllAnimals(): Animal[]{
    return this.animais;
  }

  findByNome(nome: string): Animal{
    const animal = this.animais.find((animal)=>animal.nome === nome);
    return animal;
  }
}

export {AnimaisRepository}; 