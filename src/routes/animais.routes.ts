import { Router } from "express";

import { createAnimalController } from "../useCases/createAnimal";
import { getAllAnimaisController } from "../useCases/getAllAnimais";

const animaisRotas = Router();

animaisRotas.get("/", (request, response)=>{
  return getAllAnimaisController.handle(request,response);
});

animaisRotas.post("/", (request, response)=>{
  return createAnimalController.handle(request, response);
});

export { animaisRotas };