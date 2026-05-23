import agendar from "../model/agendar";
import agendar from "../model/agendar";

export default class agendarCtrl{

    gravar(req,resp){}
    alterar(req, resp){}
    excluir(req, resp){}
    consultar(req, resp){
        if(req.method == "GET" ){
            const agendar = new agendar();

            produto.consultar()
            .then((listaAgendar) =>{
                resp.status(200).json({
                    status: "true",
                    agendar: listaAgendar
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