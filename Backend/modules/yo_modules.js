import { Schema, model } from "mongoose";
import { type } from "os";


const Esquema1 = new Schema({
    name: {
        type: String
    },

})

export const modelo1 = new model("Tabla de alumnos", Esquema1)