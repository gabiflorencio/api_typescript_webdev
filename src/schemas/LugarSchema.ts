import mongoose, { Document, Schema } from "mongoose";

const LugarSchema = new Schema(
  {
    nome:{
        type: String,
        required: true,
        unique: true
    },
    pais:{
        type: String,
        required: true,
        unique: false
    },
    continente:{
        type: String,
        required: true,
        unique: false
    }
  }
);

const LugarDB = mongoose.model("Lugar", LugarSchema);

export { LugarDB };