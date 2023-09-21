import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostumerListComponent } from './costumer-list/costumer-list.component';
import { FormCostumerComponent } from './form-costumer/form-costumer.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CostumerListComponent,
    FormCostumerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class CostumerModule { }
