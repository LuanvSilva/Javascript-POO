export class View {
    constructor(elemento) {
        this.elemento = elemento;
}
template(model){
    throw new Error('O metodo template deve ser implementado nesta classe' )
}
 update(model){

    this.elemento.innerHTML = this.template(model)
 }   


}