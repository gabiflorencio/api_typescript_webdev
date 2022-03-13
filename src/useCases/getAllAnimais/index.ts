import { AnimaisRepository } from "../../repositories/AnimaisRepository";
import { GetAllAnimaisService } from "../../services/GetAllAnimaisService";
import { GetAllAnimaisController } from "./GetAllAnimaisController";

const animalRepositorio =  AnimaisRepository.getInstance();
const getAllAnimaisService = new GetAllAnimaisService(animalRepositorio);
const getAllAnimaisController = new GetAllAnimaisController(getAllAnimaisService);


export { getAllAnimaisController};