import { LugaresRepository } from "../../repositories/LugaresRepository";
import { GetAllLugaresService } from "../../services/GetAllLugaresService";
import { GetAllLugaresController } from "./GetAllLugaresController";


const lugaresRepository = LugaresRepository.getInstance();
const getAllLugaresService = new GetAllLugaresService(lugaresRepository);

const getAllLugaresController = new GetAllLugaresController(getAllLugaresService); 

export { getAllLugaresController };