class Pessoa {
    _nome
    _idade
    _peso 
    _altura
    _imc
    static totalDePessoa = 0
    constructor (nome, idade,peso,altura){
        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._altura = altura
        this._imc = this._peso / (this._altura * this._altura)
        Pessoa.totalDePessoa +=1
    }
    calculaImc(){
        return (this._peso / (this._altura * this._altura)).toFixed(2)
    }
    classificaImc(valorImc){
        valorImc = (this.imc).toFixed(2)
        let  clasificacao = ''

        if(valorImc < 18.5){
        clasificacao = 'Abaixo do peso'
    } else if(valorImc <= 24.9){
        clasificacao = 'Peso normal'
    }  else if(valorImc <= 29.9){
        clasificacao = 'Sobrepeso'
    }  else if(valorImc <= 34.9){
        clasificacao = 'Obsidade grau I'
    }  else if(valorImc <= 39.9){
        clasificacao = 'Obsidade grau II'
    }   else if(valorImc > 40){
        clasificacao = 'Obsidade grau III ou Morbida'
    } else{
        clasificacao = 'Peso invalido'
    }
    return clasificacao
}


    //get =  pegar
    get nome(){
        return this._nome
    }
    get idade(){
        return this._idade
    }
    get peso(){
        return this._peso
    }
    get imc(){
        return this._imc
    }
    get totalPessoas (){
        return this.totalPessoas
    }
    // set = consfigurar,editar,alterar
    set nome(novoNome){
        return this._nome = novoNome
    }

    set idade(novoIdade){
        return this._idade = novoIdade
    }
} 

let pessoa1  = new Pessoa('Lunar',25,85.5,1.75)
let pessoa2  = new Pessoa('Marte',26,50.5,1.50)
let pessoa3  = new Pessoa('Satu',27,82.2,1.90)
let pessoa4  = new Pessoa('Barata',90.2,50,1.50)
console.log(Pessoa.totalDePessoa)

console.log('Situação ' + pessoa1.classificaImc())
console.log('Situação ' + pessoa2.classificaImc())
console.log('Situação ' + pessoa3.classificaImc())
console.log('Situação ' + pessoa4.classificaImc())

console.log('Nome :' + pessoa1.nome)
console.log('idade :' + pessoa1.idade)
console.log('imc :' + pessoa1.peso)
console.log('imc :' + pessoa1.imc)

pessoa1.nome = 'Luan Vitorio'
pessoa1.idade = 26


console.log(pessoa1.calculaImc())
console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)
