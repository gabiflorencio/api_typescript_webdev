import { AnimaisRepository } from "../../repositories/AnimaisRepository";
import { CreateAnimalService } from "../../services/CreateAnimalService";
import { CreateAnimalController } from "./CreateAnimalController";


const animalRepositorio = AnimaisRepository.getInstance();
const createAnimalService = new CreateAnimalService(animalRepositorio);
const createAnimalController = new CreateAnimalController(createAnimalService);

export { createAnimalController }; 