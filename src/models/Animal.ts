import { v4 as uuidV4 } from "uuid";

class Animal{
    nome: string;
    especie: string;
    familia: string;
    created_at: Date;
    id?: string; /*Opcional -> ?*/

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}
export {Animal};