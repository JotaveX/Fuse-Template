import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../shared/funcionario.model';
import { FuncionarioService } from '../shared/funcionario.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-funcionario',
  templateUrl: './detail-funcionario.component.html',
  styleUrls: ['./detail-funcionario.component.scss']
})
export class DetailFuncionarioComponent implements OnInit {

  numbers: number[] = [0,1,2,3,4,5,6,7,8,9,10];
  edit: boolean = false;
  action: string = window.location.href.split('/')[window.location.href.split('/').length - 1];
  dialog: string;

  funcionario: Funcionario = {};

  constructor(private funcionarioService: FuncionarioService,
               private router: Router,
               private dialogref?: MatDialogRef <DetailFuncionarioComponent>) { }

  ngOnInit(): void {
    this.verifyAction();
  }

  verifyAction(): void {
    if(window.location.href.split('/')[window.location.href.split('/').length - 1] != 'funcionario'){
      console.log('dialog');
      this.action = 'dialog';
    }else{
      if (this.action === 'new') {
        console.log('new');
      } if(this.action === 'edit') {
        this.edit = true;
        this.getId();
      }
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
//TODO: Ativo esta dando NULL quando é false
  submit(): void {
    if(this.action === 'edit'){
      this.submitEdit();
    }if(this.action === 'new'){
      this.submitNew();
    }if(this.action === 'dialog'){
      this.submitDialog();
    }
  }

  submitDialog(){
    this.funcionarioService.create(this.funcionario)
      .subscribe(
        data => {
          this.dialogref.close(data);
        }
      );
  }

  submitNew(): void {
    this.funcionarioService.create(this.funcionario)
      .subscribe(
        data => {
          this.router.navigate(['funcionario'])
        }
      );
  }

  submitEdit(): void {
    this.funcionarioService.update(this.getId(), this.funcionario)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['funcionario'])
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
