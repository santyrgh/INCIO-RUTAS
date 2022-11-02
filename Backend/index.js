
///presedimiento vital
import express  from "express";

import dotenv from "dotenv";
import cors from "cors";
import conectarDB from './config/db.js'

dotenv.config();////para trabajar con variables de entorno

const PORT = process.env.PORT || 4000;



const app = express();
app.use(express.json());

 conectarDB();

app.use('/', (req, res) => {
    res.json("Hola mundo ExpressJs")
});

app.listen(PORT, ( ) => {
console.log(`Server listening on ${PORT}`)
});
