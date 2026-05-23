import { Router } from "express";
import agendarCtrl from "../Controller/agendarCtrl.js";
import agendarCtrl from "../Controller/agendarCtrl.js";

const rotaagendar = Router();
const agendarCtrl = new agendarCtrl();

rotaagendar.get("/", agendarCtrl.consultar);

export default rotaagendar;