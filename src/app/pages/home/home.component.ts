import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  funcionarios: Funcionario[] = []
  funcionarioGeral: Funcionario[] = []

  constructor( private funcionarioService: FuncionariosService){}

  ngOnInit(): void {

    this.funcionarioService.GetFuncionarios().subscribe(data => {
        const dados = data.dados;

        dados.map((item) => {
            item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR')
            item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR')
        })

        this.funcionarios = data.dados;
        this.funcionarioGeral = data.dados;

    });
  }

  search(event : Event) {
    const target = event.target as  HTMLInputElement;
    const value = target.value.toLowerCase();

    this.funcionarios = this.funcionarioGeral.filter(funcionario => {
      return funcionario.nome.toLowerCase().includes(value);
    })

  }
}
