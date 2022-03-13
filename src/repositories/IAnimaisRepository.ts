import { Animal } from "../models/Animal";

//DTO  - Data transfer Object
interface ICreateAnimalDTO{
  nome: string;
  especie: string;
  familia: string;
}

interface IAnimaisRepository{
  findByNome(nome: string): Animal;
  create({nome, especie, familia}: ICreateAnimalDTO): void;
  getAllAnimals(): Animal[];
}

export { IAnimaisRepository, ICreateAnimalDTO};