import { Lugar } from "../models/Lugar"

//DTO - Data transfer Object
interface ICreateLugarDTO{
  nome: string;
  pais: string;
  continente: string;
}

interface ILugaresRepository{
  findByName(nome: string): Promise<Lugar>;
  getAllLugares(): Lugar[];
  create({nome, pais, continente }: ICreateLugarDTO): void;
}

export { ILugaresRepository, ICreateLugarDTO}; 