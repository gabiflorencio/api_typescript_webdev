/*O que eu preciso criar quando eu quiser trabalhar com o repositório do tipo Lugares*/

import { Lugar } from "../models/Lugar";
import { ILugaresRepository, ICreateLugarDTO } from "./ILugaresRepository";

class LugaresRepository implements ILugaresRepository{
  private lugares: Lugar[];

  private static INSTANCE: LugaresRepository;

  private constructor(){
    this.lugares = [];
  }

  public static getInstance(): LugaresRepository{
    if(!LugaresRepository.INSTANCE){
      LugaresRepository.INSTANCE = new LugaresRepository();
    }
    return LugaresRepository.INSTANCE;
  }

  create({continente, pais, nome}: ICreateLugarDTO): void{
    const lugar = new Lugar();

    Object.assign(lugar,{
      nome,
      pais,
      continente,
      created_at: new Date()
    });

    this.lugares.push(lugar);
  }

  getAllLugares(): Lugar[] {
    return this.lugares;
  }

  findByName(nome: string): Lugar{
    const lugar = this.lugares.find((lugar)=> lugar.nome === nome);

    return lugar;
  }
}

export { LugaresRepository};