import { Request, Response } from "express";

import {GetAllLugaresService} from "../../services/GetAllLugaresService"


class GetAllLugaresController{
  private getAllLugaresService: GetAllLugaresService;

  constructor(createLugarService: GetAllLugaresService){
    this.getAllLugaresService = createLugarService;
  }
  handle(request: Request, response: Response): Response{
    const allLugares = this.getAllLugaresService.execute();

    return response.status(200).json(allLugares);
  }
}


export { GetAllLugaresController };