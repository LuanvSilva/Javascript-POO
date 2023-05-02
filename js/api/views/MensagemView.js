export class MensagemView {

    constructor(elemento) {
        this.elemento = elemento;
    }
    _template(model){
        return model.texto ? `<p class='alert alertsu'`
    }




}