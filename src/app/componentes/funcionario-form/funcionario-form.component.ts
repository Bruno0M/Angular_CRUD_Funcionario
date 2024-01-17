import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/models/Funcionarios';

interface Departamento {
  value: string;
  viewValue: string;
}

interface Turno {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})

export class FuncionarioFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Funcionario>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosFuncionario: Funcionario | null = null;

  funcionarioform!: FormGroup;

  constructor() {  }

  ngOnInit(): void {
    this.funcionarioform = new FormGroup({
        id: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.id : 0),
        nome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.nome : '', [Validators.required]),
        sobrenome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.sobrenome : '', [Validators.required]),
        departamento: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.departamento : '', [Validators.required]),
        turno: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.turno : '', [Validators.required]),
        ativo: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.ativo : true),
        dataDeCriacao: new FormControl(new Date()),
        dataDeAlteracao: new FormControl(new Date())
    });
    
  }

  submit() {
    console.log(this.funcionarioform.value)

    this.onSubmit.emit(this.funcionarioform.value);
  }

  departamentos: Departamento[] = [
    { value: 'rh', viewValue: 'Rh' },
    { value: 'financeiro', viewValue: 'Financeiro' },
    { value: 'compras', viewValue: 'Compras' },
    { value: 'atendimento', viewValue: 'Atendimento' },
    { value: 'zeladoria', viewValue: 'Zeladoria' },
  ];

  turnos: Turno[] = [
    { value: 'manha', viewValue: 'Manha' },
    { value: 'tarde', viewValue: 'Tarde'},
    { value: 'noite', viewValue: 'Noite'}
  ]
  selected = 'option1'

}
