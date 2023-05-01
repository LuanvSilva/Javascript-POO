export class Pessoa {
    _nome
    _idade
    _peso 
    _altura
    _imc
    _classificacao
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


