import { Component } from '@angular/core';
import { FuncionarioService } from './shared/funcionario.service';
import { Funcionario } from './shared/funcionario.model';
import { debounceTime } from 'rxjs/operators';
import {  Subject } from 'rxjs';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent {

  private debounceSubject = new Subject<string>();

  constructor(private funcionarioService: FuncionarioService) { 
    this.debounceSubject.pipe(debounceTime(500)).subscribe((valorDoInput) => {
      this.searchByName(valorDoInput);
    });
  }

  funcionarios: Funcionario[];

  ngOnInit() {
    this.getFuncionarios();
  }

  getFuncionarios() {
    this.funcionarioService.getAll().
        subscribe((data: Funcionario[]) => {
          console.log(data);
           this.funcionarios = data;
    }
    , error => {
      console.log(error);
    });
  }

  detailFuncionario(id: number) {
      window.location.href = '/funcionario/edit/' + id;
  }

  search(value: any) {
    if(value == '') {
      this.getFuncionarios();
    }else{
      this.debounceSubject.next(value);
    }
  }

  searchByName(nome: string) {
    console.log(nome);
    this.funcionarioService.getAll(nome)
      .subscribe((data: Funcionario[]) => {
        console.log(data);
        this.funcionarios = data;
      }
      , error => {
        console.log(error);
      });
  }
}
