import { Component } from '@angular/core';
import { ClienteService } from 'src/app/servicos/cliente.service';
import { Aluno } from 'src/app/servicos/model/Aluno';

@Component({
  selector: 'app-user-root',
  templateUrl: './user-root.component.html',
  styleUrls: ['./user-root.component.css']
})
export class UserRootComponent {

  // Objeto Aluno
  aluno = new Aluno();

  // Variavel para visibilidade dos botoes
  //btnCadastro:boolean = true;

  // JSON de Alunos
  alunos:Aluno[] = [];

  // Construtor
  constructor(private servico:ClienteService){}

  // Metodo de selecao
  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.alunos = retorno);
  }

  //Metodo de incialização
  ngOnInit(){
    this.selecionar();
  }

  //Metodo de cadastro
  cadastrar():void{
    this.servico.cadastrar(this.aluno)
    .subscribe(retorno => {this.alunos.push(retorno); })
  }

}
