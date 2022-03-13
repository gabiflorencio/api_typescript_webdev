import { Lugar } from "../models/Lugar";
import { LugarDB } from "../schemas/LugarSchema";
import { ICreateLugarDTO, ILugaresRepository } from "./ILugaresRepository";


class LugaresMongoRepository implements ILugaresRepository{
    async findByName(nome: string): Promise<Lugar> {
        const lugar = await LugarDB.find({nome: nome}).exec();

        if(lugar.length == 0 ){
            return null;
        }
        const nomeLugar = lugar[0]["nome"];
        const paisLugar = lugar[0]["pais"];
        const continenteLugar = lugar[0]["continente"];

        const lugarFind = new Lugar();
        Object.assign(lugarFind,{
            nomeLugar,
            paisLugar,
            continenteLugar
        })

        return lugarFind;

    }

    getAllLugares(): Lugar[]{
        throw new Error("Method not implemented.")
    };

    create({nome, pais, continente }: ICreateLugarDTO): void{
        LugarDB.create({
        nome,
        pais, continente})
    }

}
export {LugaresMongoRepository};