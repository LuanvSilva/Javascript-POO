import { PessoaController } from "./api/controllers/PessoaController.js";

console.log('carai')
let pessoaController = new PessoaController()

let formulario = document.querySelector('form')

formulario.addEventListener('submit',(event) =>{
    console.log('click')

    //adicionar Pessoa
    pessoaController.adiciona(event)
    //Limpa formulario
    pessoaController._limpaFormulario
})
