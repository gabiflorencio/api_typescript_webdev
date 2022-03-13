import { ILugaresRepository } from "../repositories/ILugaresRepository";


interface IRequest{
  nome: string;
  pais: string;
  continente: string;
}

class CreateLugarService {

  private lugaresRepository: ILugaresRepository;

  constructor(lugaresRepository: ILugaresRepository){
    this.lugaresRepository = lugaresRepository;
  }
  async execute({ nome, pais, continente } : IRequest): Promise<boolean> {
    const lugarAlreadyExists = await this.lugaresRepository.findByName(nome);

    if (lugarAlreadyExists == null) {
      this.lugaresRepository.create({ nome, pais, continente});
      return true;
    } 
    else {
      return false;
      

    }
  }
}

export { CreateLugarService }; 