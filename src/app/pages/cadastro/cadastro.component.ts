import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  btnAcao = "Cadastrar!"
  btnTitulo = "Cadastrar Funcionário"
  constructor(private funcionarioService : FuncionariosService, private router: Router) {
    
  }


  createFuncionario(funcionario: Funcionario) {
    this.funcionarioService.CreateFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(['/'])
    }); 
  
  };
}
