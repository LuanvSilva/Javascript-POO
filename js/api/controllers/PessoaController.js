import { Pessoa } from "../models/Pessoa";

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
    }
    adiciona(event){

        event.preventDefault()
        this._criarPessoa()
        console.log(this._criarPessoa())


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

