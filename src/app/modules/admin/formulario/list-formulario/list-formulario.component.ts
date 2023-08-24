import { Component, Input, OnDestroy } from '@angular/core';
import { Formulario } from '../shared/formulario.model';
import { FormularioService } from '../shared/formulario.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommunicationService } from 'app/shared/communication.service';

@Component({
  selector: 'app-list-formulario',
  templateUrl: './list-formulario.component.html',
  styleUrls: ['./list-formulario.component.scss']
})
export class ListFormularioComponent implements OnDestroy {


  listState: any = 'list';
  private subscription: Subscription;
  formularios: Formulario[];
  columns = ['codigo', 'data', 'cpf', 'estadoCivil', 'rg', 'email', 'cep', 'pontos'];

  ngOnInit() {
    this.getformularios();
  }

    constructor(private formularioService: FormularioService,
                private router: Router,
                private communicationService: CommunicationService) {
                  this.subscription = this.communicationService.getListState().subscribe(newState => {
                    this.listState = newState;
                    console.log(this.listState);
                  });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

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
