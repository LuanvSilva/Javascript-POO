import { PessoaController } from "./api/controllers/PessoaController";

let pessoaController = new PessoaController()

let formulario = document.querySelector('form')

formulario.addEventListener('submit',(event) =>{


    //adicionar Pessoa
    pessoaController.adiciona(event)
    //Limpa formulario
    pessoaController._limpaFormulario
})