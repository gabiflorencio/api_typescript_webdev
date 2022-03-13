
import { Router } from "express";
import { getAllLugaresController } from "../useCases/getAllLugaresController";
import { createLugaresController } from "../useCases/createLugar";
/**
 * Lugares
 * - Nome;
 * - País,
 * - Continente,
 * - created_at;
 * - id*
 */


  const lugaresRotas = Router();
 
  lugaresRotas.get("/", (request, response) => {
    return getAllLugaresController.handle(request, response);
  });
 
  lugaresRotas.post("/", (request, response) => {
    return createLugaresController.handle(request,response);
  });
 
  export { lugaresRotas }; 
