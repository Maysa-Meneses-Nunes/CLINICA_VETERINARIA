import { Router } from "express";
import AgendarCtrl from "../Controller/agendarCtrl.js";


const rotaagendar = Router();
const agendarController = new AgendarCtrl();

rotaagendar.get("/", agendarController.consultar);

export default rotaagendar;