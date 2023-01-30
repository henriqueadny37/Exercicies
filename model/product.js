export default class produto {
    #id
    #nome
    #preco
// classes^

    constructor(id, nome, preco) {
        this.#id = id
        this.#nome = nome
        this.#preco = preco
    }
//construtor^

    get id(){
        return this.#id
    }
    get nome(){
        return this.#nome
    }
    get preco(){
        return this.#preco
    }
    //Atributos^
}