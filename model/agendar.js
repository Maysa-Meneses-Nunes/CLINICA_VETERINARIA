import AgendarDB from"../DB/agendarDB.js";
export default class agendar{
    #nome 
    #email
    #numero

    constructor(nome, email, numero) {
        this.#nome = nome
        this.#email = email
        this.#numero = numero
 
    }
    get nome() {
        return this.#nome
    }

    get email() {
        return this.#email
    }

    get numero() {
        return this.#numero
    }

    set nome(nome) {
        this.#nome = nome
    }

    set email(email) {
        this.#email = email
    }

    set numero(numero) {
        this.#numero= numero
    }

    toJSON() {
        return {
            nome: this.#nome,
            email: this.#email,
            numero: this.#numero
           
        }
    }
     async gravar(){}
     async alterar(){}
     async excluir(){}
     async consultar(){ 
        const agendarDB = new AgendarDB();
        return await agendarDB.consultar();
     }
    }