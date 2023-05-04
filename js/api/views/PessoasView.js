import{ View } from '../views/View.js'
export class PessoasView extends View {

    constructor(elemento){

        super(elemento)
    }
    template(model) {

        return `
        
        <table class="table table-hover">
  <thead>
    <tr>
      
      <th scope="col">Nome</th>
      <th scope="col">Idade</th>
      <th scope="col">Peso</th>,
      <th scope="col">Altura</th>
      <th scope="col">Imc</th> 
      <th scope="col">Situação</th>    //////

    </tr>
  </thead>
  <tbody>
   ${model.pessoa.map(pessoa =>{ 
    return `
    <tr>
      
      <td>${pessoa._nome}</td>
      <td>${pessoa._idade}</td>
      <td>${pessoa._peso}</td>
      <td>${pessoa._altura}</td>
      <td>${pessoa.imc}</td>  
      <td>${pessoa.classificaImc()}</td>    

    </tr>
     `
 }).join('')}
  </tbody>
</table>
        
    `
    }


}