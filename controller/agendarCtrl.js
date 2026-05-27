//import agendarDB from "../database/agendarDB.js";
import Agendar from "../model/agendar.js";

export default class agendarCtrl{

    gravar(req,resp){}
    alterar(req, resp){}
    excluir(req, resp){}
    consultar(req, resp){
        if(req.method == "GET" ){
            const agendar = new Agendar();

            agendar.consultar()
            .then((listaAgendar) =>{
                resp.status(200).json({
                    status: "true",
                    agenda: listaAgendar
                });
            })
            .catch((erro) => {
                resp.status(500).json({
                    status:"false",
                    mensagem: erro.message
                });
            });

        }
        else{
            resp.status(405).json({
                status:"false",
                mensagem: "Metodo não permitido"
            });
        }

    }

    
}