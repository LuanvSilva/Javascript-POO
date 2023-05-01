class Pessoa {
    _nome
    _idade
    _peso 
    _altura
    _imc
    constructor (nome, idade,peso,altura){
        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._altura = altura
        this._imc = this._peso / (this._altura * this._altura)
    }
    calculaImc(){
        return (this._peso / (this._altura * this._altura)).toFixed(2)
    }
} 

let pessoa1  = new Pessoa('Lunar',25,80.5,1.90)
let pessoa2  = new Pessoa('Marte',26,50.5,1.50)
let pessoa3  = new Pessoa('Satu',27,82.2,1.90)
let pessoa4  = new Pessoa('Barata',90.2,50,1.50)





console.log(pessoa1.calculaImc())
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)
