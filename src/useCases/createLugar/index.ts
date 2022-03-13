

import { CreateLugaresController } from "./CreateLugarController";
import {CreateLugarService } from "../../services/CreateLugarService";
import { LugaresMongoRepository } from "../../repositories/LugaresMongoRepository";

const lugaresRepositoriy = new LugaresMongoRepository;
const lugarService = new CreateLugarService(lugaresRepositoriy);
const createLugaresController = new CreateLugaresController(lugarService);

export {createLugaresController}