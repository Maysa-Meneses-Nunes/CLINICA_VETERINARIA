
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

    toJSON() {
        return {
            nome: this.#nome,
            email: this.#email,
            numero: this.#numero,
           
        }
    }
     async gravar(){}
     async alterar(){}
     async excluir(){}
    }