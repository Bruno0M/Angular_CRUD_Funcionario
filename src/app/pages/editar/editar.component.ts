import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  btnAcao: string = 'Editar'
  btnTitulo: string = 'Editar Funcionário'
  funcionario!: Funcionario;

  constructor(private  funcionarioService : FuncionariosService, private route: ActivatedRoute, private router: Router)  {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.GetFuncionario(id).subscribe((data) => {
      this.funcionario = data.dados
    })
  }

  editarFuncionario(funcionario: Funcionario) {
    this.funcionarioService.EditarFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(['/']);
    })
  }
}
