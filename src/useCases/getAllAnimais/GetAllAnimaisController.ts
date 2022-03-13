import { Request, Response } from "express";
import { GetAllAnimaisService } from "../../services/GetAllAnimaisService";


class GetAllAnimaisController{
  private getAllAnimaisService: GetAllAnimaisService;

  constructor(getAllAnimaisService: GetAllAnimaisService){
    this.getAllAnimaisService = getAllAnimaisService;
  }

  handle(request: Request, response: Response): Response{
    const allAnimais = this.getAllAnimaisService.execute();

    return response.status(200).json(allAnimais);
  }
}

export { GetAllAnimaisController}; 