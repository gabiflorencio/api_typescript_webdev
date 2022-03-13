import mongoose, {Document, Schema} from "mongoose";

const AnimalSchema = new Schema(
    {
        nome:{
            type: String,
            required: true,
            unique: true
        },
        especie:{
            type: String,
            required: true,
            unique: true
        },
        familia:{
            type: String,
            required: true,
            unique: false
        }
    }
);

const AnimalDB = mongoose.model("Animal", AnimalSchema);

export {AnimalDB};