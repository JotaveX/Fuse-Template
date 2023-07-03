import { Component } from '@angular/core';
import { FuncionarioService } from './shared/funcionario.service';
import { Funcionario } from './shared/funcionario.model';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent {

  constructor(private funcionarioService: FuncionarioService) { }

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

  searchByName(nome: string) {
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
