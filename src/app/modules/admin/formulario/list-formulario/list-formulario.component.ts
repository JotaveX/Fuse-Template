import { Component, Input, OnDestroy } from '@angular/core';
import { Formulario } from '../shared/formulario.model';
import { FormularioService } from '../shared/formulario.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommunicationService } from 'app/shared/communication.service';
import { GenericList } from 'app/shared/models/generic-list';

@Component({
  selector: 'app-list-formulario',
  templateUrl: './list-formulario.component.html',
  styleUrls: ['./list-formulario.component.scss']
})
export class ListFormularioComponent implements OnDestroy {

// TODO: Coplumns virar objeto com type e name
  listState: any = 'list';
  private subscription: Subscription;
  formularios: Formulario[];
  displayedColumns: string[] = ['Codigo', 'Data', 'Estado Civil'];
  columns: GenericList[] = [{columns: 'Codigo', type: 'number'}, {columns: 'Data', type: 'date'}, {columns: 'Estado Civil', type: 'string'}];


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

  masterToggle() {
    console.log('masterToggle');
  }

  delete(id: number){
    this.formularioService.delete(id).subscribe(
      data => {
        console.log(data);
        this.getformularios();
      },
      error => console.log(error));
  }

}
