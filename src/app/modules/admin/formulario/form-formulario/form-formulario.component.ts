import { Component, ElementRef, ViewChild } from '@angular/core';
import { Formulario } from '../shared/formulario.model';
import { FormularioService } from '../shared/formulario.service';
import { Router } from '@angular/router';
import { Funcionario } from '../../funcionario/shared/funcionario.model';
import { FuncionarioService } from '../../funcionario/shared/funcionario.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-formulario',
  templateUrl: './form-formulario.component.html',
  styleUrls: ['./form-formulario.component.scss']
})
export class FormFormularioComponent {

  formulario: Formulario = new Formulario();
  funcionarios: Funcionario[] = [];
  edit: boolean = false;
  display: FormControl = new FormControl("", Validators.required);
  file_store: FileList;
  file_list: Array<string> = [];

  handleFileInputChange(l: FileList): void {
    this.file_store = l;
    if (l.length) {
      const f = l[0];
      const count = l.length > 1 ? `(+${l.length - 1} files)` : "";
      this.display.patchValue(`${f.name}${count}`);
    } else {
      this.display.patchValue("");
    }
  }

  handleSubmit(): void {
    var fd = new FormData();
    this.file_list = [];
    for (let i = 0; i < this.file_store.length; i++) {
      fd.append("files", this.file_store[i], this.file_store[i].name);
      this.file_list.push(this.file_store[i].name);
    }

    // do submit ajax
  }

  constructor(private formularioService: FormularioService,
              private funcionarioService: FuncionarioService,
              private router: Router) { }

  ngOnInit(): void {
    this.verifyAction();
    this.getFuncionario();
  }

  getFuncionario(): void {
    this.funcionarioService.getAll()
      .subscribe(
        data => {
          this.funcionarios = data;
          //console.log(data);
        }
      );
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
    this.formularioService.get(id)
      .subscribe(
        data => {
          this.formulario = data;
          this.formulario.administrador = this.formulario.administrador._id;
          this.formulario.funcionarios = this.formulario.funcionarios.map((funcionario: Funcionario) => funcionario._id);
          console.log(this.formulario);
        }
      );
      
    return id;
  }

  submit(): void {
    console.log(this.formulario);
    if(this.edit){
      this.submitEdit();
    }else{
      this.submitNew();
    }
  }

  submitNew(): void {
    this.formularioService.create(this.formulario)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/formulario']);
        }
      );
  }

  submitEdit(): void {
    this.formularioService.update(this.getId(), this.formulario)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/formulario']);

        }
      );
  }

  delete(): void {
    this.formularioService.delete(this.getId())
      .subscribe(
        data => {
          this.router.navigate(['/formulario']);
          console.log(data);
        }
      );
  }

}
