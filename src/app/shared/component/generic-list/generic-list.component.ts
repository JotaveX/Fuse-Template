import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommunicationService } from 'app/shared/communication.service';
import { Subscription } from 'rxjs';
import { NgSwitch } from '@angular/common';
import { GenericList } from 'app/shared/models/generic-list';


@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss']
})
export class GenericListComponent implements OnInit{

  @Input() dataSource: any[];
  @Input() columns: GenericList[];
  
  listState: any = 'list';
  header: any[];
  private subscription: Subscription;

  ngOnInit(): void {
    console.log(this.columns);
    //this.textHeader();
  }

  textHeader(){
    this.header = [];
    for(let i = 0; i < this.columns.length; i++){
      this.header.push(this.columns[i].type.charAt(0).toUpperCase() + this.columns[i]);
      this.header[i] = this.header[i].replace(/([A-Z])/g, ' $1').trim();
    }
  }

  constructor(private communicationService: CommunicationService) {
    this.subscription = this.communicationService.getListState().subscribe(newState => {
      this.listState = newState;
    });
   }

   typeOf(value: any){
      if(Array.isArray(value)){
        if(value.length > 0 && typeof value[0] === 'object'){
          return 'objectArray';
        }
        return 'array';
      }
      if(typeof value === 'string' && value !== null){
        const date = new Date(value);
        if(date.toString() !== 'Invalid Date'){
          return 'date';
        }
      }
      return typeof value;
    }
  
}

