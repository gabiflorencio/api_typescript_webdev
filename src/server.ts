import express from "express";
import { lugaresRotas } from "./routes/lugares.routes"
import { animaisRotas } from "./routes/animais.routes";

const app = express();

app.listen(3131);

app.use(express.json());

app.use("/lugar", lugaresRotas);
app.use('/animal', animaisRotas);

app.get("/", (request, response)=>{
  return response.send("Hello world A Typescript!");
});