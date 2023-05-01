export class ListaPessoa {
    constructor(){
        this._pessoas = []
    }

    adiciona(pessoa){
        this._pessoas.push(pessoa)
    }
    get pessoa(){
        return [].concat(this._pessoas)
    }
}