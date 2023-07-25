import { Component } from '@angular/core';
import { Formulario } from '../shared/formulario.model';
import { FormularioService } from '../shared/formulario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-formulario',
  templateUrl: './list-formulario.component.html',
  styleUrls: ['./list-formulario.component.scss']
})
export class ListFormularioComponent {
    
  formularios: Formulario[];

  ngOnInit() {
    this.getformularios();
  }

    constructor(private formularioService: FormularioService,
                private router: Router) { }

  getformularios() {
    this.formularioService.getAll().
        subscribe((data: Formulario[]) => {
          console.log(data);
           this.formularios = data;
    }
    , error => {
      console.log(error);
    });
  }

  detailformulario(id: number) {
      this.router.navigate(['/formulario', id]);
  }

  searchByName(nome: string) {
    this.formularioService.getAll()
      .subscribe((data: Formulario[]) => {
        console.log(data);
        this.formularios = data;
      }
      , error => {
        console.log(error);
      });
  }

}
