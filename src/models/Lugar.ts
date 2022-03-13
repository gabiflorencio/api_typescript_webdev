import {v4 as uuidV4} from "uuid";

class Lugar{
    nome: string;
    pais: string;
    continente: string;
    id?: string;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { Lugar };