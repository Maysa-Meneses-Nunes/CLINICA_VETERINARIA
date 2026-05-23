import obterConexao from "./conexao.js";
import agendar from "../model/agendar";

export default class ageendarDB {

    async gravar(agendar) {}
    async alterar(agendar) {}
    async excluir(agendar) {}
    async consultar() {
        const conexao = await obterConexao();
        const sql = 'SELECT * FROM agendar;';
        const [resultados, campos] = await conexao.query(sql);
        const listaAgendar = [];
        for (const resultado of resultados) {
            const produto = new Agendar(
                resultado.nome,
                resultado.email,
                resultado.numero,
            );
            listaAgendar.push(agendar);
        }
        return listaProdutos;
        
    }
}