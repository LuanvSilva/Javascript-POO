import { Pessoa } from "../models/Pessoa.js";
import { ListaPessoa } from "../models/ListaPessoa.js";
import { Mensagem } from "../models/Mensagem.js";
import { MensagemView } from "../views/MensagemView.js";
import { PessoasView } from "../views/PessoasView.js";

export class PessoaController {
    _inputName
    _inputIdade
    _inputPeso
    _inputAltura

    constructor () {
       
        this._inputName = $('#nome')
        this._inputIdade = $('#idade')
        this._inputPeso = $('#peso')
        this._inputAltura = $('#altura')

        //criar lista de pessoa
        this._listaPessoa = new ListaPessoa()

        //mensagem
        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView(document.querySelector('#mensagem'))
        this._mensagemView.update(this._mensagem)


        //view de pessoa
        this._pessoasView = new PessoasView(document.querySelector('#dados'))
        this._pessoasView.update(this._listaPessoa)
      
    }
    adiciona(event){

        event.preventDefault()
        
        this._listaPessoa.adiciona(this._criarPessoa())
        console.log(this._listaPessoa.pessoa)

        //definir e atualizar mensagem
        this._mensagem.texto = 'Pessoa cadastrada com sucesso!'
        this._mensagemView.update(this._mensagem)



        //atualizacao de tela
        this._pessoasView.update(this._listaPessoa)


    }
    _criarPessoa() {
        return new Pessoa(
            this._inputName.val(),
            this._inputIdade.val(),
            this._inputPeso.val(),
            this._inputAltura.val()
        )
        
}

_limpaFormulario() {
    this._inputName.val('') = '',
    this._inputIdade.val('') = '',
    this._inputPeso.val('') = '',
    this._inputAltura.val('') = ''

    this._inputName.focus()

}

}

