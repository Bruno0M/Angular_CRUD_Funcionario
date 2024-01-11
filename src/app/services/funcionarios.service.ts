import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { Funcionario } from '../models/Funcionarios';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private apiUrl = `${environment.ApiUrl}/Funcionario`

  constructor( private http: HttpClient ) { }

  GetFuncionarios() : Observable<Response<Funcionario[]>> {
    return this.http.get<Response<Funcionario[]>>(this.apiUrl);
  }

  CreateFuncionario(funcionario: Funcionario) : Observable<Response<Funcionario[]>> {
    return this.http.post<Response<Funcionario[]>>(`${this.apiUrl}`, funcionario);
  }
}