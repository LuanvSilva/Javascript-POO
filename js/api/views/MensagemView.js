import{ View } from '../views/View.js'
export class MensagemView extends View{

    constructor(elemento) {
        
        super(elemento)
        
    }
    template(model){
        return model.texto ? `<p class='alert alert-success'>${model.texto}<\p>` : '<p><\p>'
    }
    update(model){
        
            this.elemento.innerHTML = this.template(model);
        

        setTimeout(() => this.elemento.innerHTML = '',3000)


    }




}