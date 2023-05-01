import {Pessoa} from './Pessoa.js'


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
