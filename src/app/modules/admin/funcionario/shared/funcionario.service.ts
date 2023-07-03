import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from './funcionario.model';

const baseUrl = 'http://localhost:8080/api/funcionarios';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  getAll(nome?: string): Observable<Funcionario[]> {
    if(!nome){
      return this.http.get<Funcionario[]>(baseUrl);
    }
    return this.http.get<Funcionario[]>(baseUrl + '?nome=' + nome);
  }

  get(id: any): Observable<Funcionario> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  upload(data: any, id: any): Observable<any> {
    return this.http.post(`${baseUrl}/${id}`, data);
  }

  findByNome(nome: any): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${baseUrl}?nome=${nome}`);
  }
}
