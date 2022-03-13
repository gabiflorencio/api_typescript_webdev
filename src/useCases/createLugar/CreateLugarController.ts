import {Request, Response} from "express";
import {CreateLugarService} from "../../services/CreateLugarService"

class CreateLugaresController{

    private createLugarService: CreateLugarService;

    constructor(createLugarService: CreateLugarService){
        this.createLugarService = createLugarService;
    }

    async handle(request: Request, response: Response): Promise<Response>{
        const{ nome, pais, continente } = request.body;

        const wasCreated = await this.createLugarService.execute({nome, pais, continente});

        if(wasCreated){
            return response.status(201).send(); 
        }
        else{
            return response.status(422).send("Lugar já existe");
        }

        
    }
}

export {CreateLugaresController};