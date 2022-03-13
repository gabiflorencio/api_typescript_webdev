import { Lugar } from "../models/Lugar";
import { ILugaresRepository } from "../repositories/ILugaresRepository";


class GetAllLugaresService{
  private lugaresRepository: ILugaresRepository;

  constructor(lugaresRepository: ILugaresRepository){
    this.lugaresRepository = lugaresRepository;
  }
  execute(): Lugar[] {
    const lugares = this.lugaresRepository.getAllLugares();

    return lugares;
  }
}

export { GetAllLugaresService}; 