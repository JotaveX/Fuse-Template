import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../shared/funcionario.model';
import { FuncionarioService } from '../shared/funcionario.service';
import { get } from 'lodash';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-detail-funcionario',
  templateUrl: './detail-funcionario.component.html',
  styleUrls: ['./detail-funcionario.component.scss']
})
export class DetailFuncionarioComponent implements OnInit {

  numbers: number[] = [0,1,2,3,4,5,6,7,8,9,10];
  edit: boolean = false;

  funcionario: Funcionario = {};

  constructor(private funcionarioService: FuncionarioService,
              private router: Router) { }

  ngOnInit(): void {
    this.verifyAction();
  }

  verifyAction(): void {
    const action = window.location.href.split('/')[window.location.href.split('/').length - 1];
    if (action === 'new') {
      console.log('new');
    } else {
      this.edit = true;
      this.getId();
    }
  }

  getId(): any {
    const id = window.location.href.split('/')[window.location.href.split('/').length - 1];
    this.funcionarioService.get(id)
      .subscribe(
        data => {
          this.funcionario = data;
          console.log(data);
        }
      );
      
    return id;
  }

  submit(): void {
    console.log(this.funcionario);
    if(this.edit){
      this.submitEdit();
    }else{
      this.submitNew();
    }
  }

  submitNew(): void {
    this.funcionarioService.create(this.funcionario)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/funcionario']);
        }
      );
  }

  submitEdit(): void {
    this.funcionarioService.update(this.getId(), this.funcionario)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/funcionario']);

        }
      );
  }

  delete(): void {
    this.funcionarioService.delete(this.getId())
      .subscribe(
        data => {
          this.router.navigate(['/funcionario']);
          console.log(data);
        }
      );
  }

}
