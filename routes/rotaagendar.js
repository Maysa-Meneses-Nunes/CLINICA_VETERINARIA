import { Router } from "express";
import agendarCtrl from "../Controller/agendarCtrl.js";


const rotaagendar = Router();
const agendarController = new agendarCtrl();

rotaagendar.get("/", agendarController.consultar);

export default rotaagendar;