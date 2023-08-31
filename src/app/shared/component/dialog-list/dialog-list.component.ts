import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Funcionario } from 'app/modules/admin/funcionario/shared/funcionario.model';
import { FuncionarioService } from 'app/modules/admin/funcionario/shared/funcionario.service';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-dialog-list',
  templateUrl: './dialog-list.component.html',
  styleUrls: ['./dialog-list.component.scss']
})
export class DialogListComponent implements OnInit {

  list: any[] = [];
  selectedItems: any[] = [];
  private debounceSubject = new Subject<string>();


  ngOnInit(): void {
    this.fetchData();
  }

  constructor(public dialogRef: MatDialogRef <DialogListComponent>, @Inject(MAT_DIALOG_DATA) public data: { apiUrl: string, type: string }, private http: HttpClient, private funcionarioService: FuncionarioService) {
    this.debounceSubject.pipe(debounceTime(500)).subscribe((valorDoInput) => {
      this.searchByName(valorDoInput);
    });
  }

  fetchData() {
    this.http.get<any[]>(this.data.apiUrl).subscribe(list => {
      this.list = list;
    });
  }

  enviarSelecoes() {
    if(this.data.type === 'radio') {
      console.log('Itens selecionados:', this.selectedItems);
      this.dialogRef.close(this.selectedItems);
      }
    else {
      const selectedItems = this.list.filter(item => item.selected);
      console.log('Itens selecionados:', selectedItems);
      this.dialogRef.close(selectedItems);
    }
  }

  search(value: any) {
      this.debounceSubject.next(value);
  }

  searchByName(nome: string) {
    console.log(nome);
    this.funcionarioService.getAll(nome)
      .subscribe((data: Funcionario[]) => {
        console.log(data);
        this.list = data;
      }
      , error => {
        console.log(error);
      });
  }
}
