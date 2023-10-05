import { Component, ViewChild } from '@angular/core';
import { CommunicationService } from 'app/shared/communication.service';
import { Subscription } from 'rxjs';

interface selectData {
  data: any;
  selected: boolean;
}

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss']
})
export class GenericListComponent {

  listState: any = 'list';
  private subscription: Subscription;
  columns: string[] = ['id', 'name', 'email', 'phone'];
  dataSource: any[] = [
    { id: 1, name: 'John', email: 'john@gmail.com', phone: '123456789' },
    { id: 2, name: 'Marcia', email: 'Marcia@gmail.com', phone: '123456789' },
    { id: 3, name: 'Lucas', email: 'Lucas@gmail.com', phone: '123456789' },
    { id: 4, name: 'Carlos', email: 'Carlos@gmail.com', phone: '123456789' },
    { id: 5, name: 'Maia', email: 'Maia@gmail.com', phone: '123456789' }
  ];


  constructor(private communicationService: CommunicationService) {
    this.subscription = this.communicationService.getListState().subscribe(newState => {
      this.listState = newState;
      console.log(this.listState);
    });
   }



}

