import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/models/Funcionarios';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Funcionario>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;

  funcionarioform!: FormGroup;

  constructor() {  }

  ngOnInit(): void {
    this.funcionarioform = new FormGroup({
        id: new FormControl(0),
        nome: new FormControl('', [Validators.required]),
        sobrenome: new FormControl('', [Validators.required]),
        departamento: new FormControl('', [Validators.required]),
        turno: new FormControl('', [Validators.required]),
        ativo: new FormControl(true),
        dataDeCriacao: new FormControl(new Date()),
        dataDeAlteracao: new FormControl(new Date())
    });
    
  }

  submit() {
    console.log(this.funcionarioform.value)

    this.onSubmit.emit(this.funcionarioform.value);
  }

}