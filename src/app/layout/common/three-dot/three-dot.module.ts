import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ThreeDotComponent } from './three-dot.component';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    ThreeDotComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    ThreeDotComponent
  ]

})
export class ThreeDotModule { }
