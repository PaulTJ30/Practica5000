
import cors from "cors";
import mongoose from 'mongoose';
import express from 'express'
import dotenv from "dotenv"
import { test } from "./Backend/controllers/yo_controllers.js"




dotenv.config()
mongoose.connect(process.env.url_db)
    .then(() => {
        console.log("Si jala pa")
    })
    .catch((error) => {
        console.log("No funciona pa ", error)
    })
const App = express();
App.use(cors())
App.listen(4000, () => {
    console.log("Se escucha con madre")
})

test()