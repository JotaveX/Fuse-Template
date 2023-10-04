import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Inject, OnInit, ViewChild  } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DetailFuncionarioComponent } from 'app/modules/admin/funcionario/detail-funcionario/detail-funcionario.component';
import { Funcionario } from 'app/modules/admin/funcionario/shared/funcionario.model';
import { FuncionarioService } from 'app/modules/admin/funcionario/shared/funcionario.service';
import { Subject, debounceTime } from 'rxjs';

interface list {
  data: any;
  selected?: boolean;
}


@Component({
  selector: 'app-dialog-list',
  templateUrl: './dialog-list.component.html',
  styleUrls: ['./dialog-list.component.scss']
})
export class DialogListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  list: list[] = [];
  selectedItems: any[] = [];
  private debounceSubject = new Subject<string>();
  dataSource = new MatTableDataSource<list>([]);
  selectAll = false;
  radioSelected: any;


  ngOnInit(): void {
    this.fetchData().then(() => {
      this.dataSource = new MatTableDataSource<list>(this.list);
      this.dataSource.paginator = this.paginator;
    });
  }


  constructor(public dialogRef: MatDialogRef <DialogListComponent>,
     @Inject(MAT_DIALOG_DATA) public data: { apiUrl: string, type: string, class: string, displayedColumns: string[] },
      private http: HttpClient, private funcionarioService: FuncionarioService,
      private dialog: MatDialog) { 
    this.debounceSubject.pipe(debounceTime(500)).subscribe((valorDoInput) => {
      this.searchByName(valorDoInput);
    });
  }
  
  new(){
    this.dialog.open(DetailFuncionarioComponent);
  }

  fetchData(): any {
    this.http.get<any[]>(this.data.apiUrl).subscribe(list => {
      this.list = list;
    });
  }

  enviarSelecoes() {
    if(this.data.type === 'radio') {
      console.log('Itens selecionados radio:', this.selectedItems);
      this.dialogRef.close(this.radioSelected);
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

  changeOrder(event: any) {
    if(event == 'alfabetica'){
      this.list.sort((a, b) => a.data.nome.localeCompare(b.data.nome));
    }
    if(event == 'codigo'){
      this.list.sort((a, b) => a.data.codigo - b.data.codigo);
    }
  }


  searchByName(nome: string) {
    console.log(nome);
    this.funcionarioService.getAll(nome)
      .subscribe((data: any[]) => {
        console.log(data);
        this.list = data;
      }
      , error => {
        console.log(error);
      });
  }

  toggleSelectAll(){
    this.selectAll = !this.selectAll;
    if(this.selectAll){
      this.list.forEach(item => item.selected = true);
    }
    else{
      this.list.forEach(item => item.selected = false);
    }
  }
}
