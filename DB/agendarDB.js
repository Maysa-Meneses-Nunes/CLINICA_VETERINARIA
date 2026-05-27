import obterConexao from "./conexao.js";
import Agendar from "../model/agendar.js";

export default class agendarDB {
    async gravar(agendar) {}
    async alterar(agendar) {}
    async excluir(agendar) {}
    async consultar() {
        const conexao = await obterConexao();
        const sql = 'SELECT * FROM agendar;';
        const [resultados, campos] = await conexao.query(sql);
        const listaAgendar = [];
        for (const resultado of resultados) {
            const agendar = new Agendar(
                resultado.nome,
                resultado.email,
                resultado.numero
            );
            listaAgendar.push(agendar);
        }

    return listaAgendar;
    
}
}