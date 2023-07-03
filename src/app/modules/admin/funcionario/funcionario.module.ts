import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioComponent } from './funcionario.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { DetailFuncionarioComponent } from './detail-funcionario/detail-funcionario.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { FuseCardModule } from '@fuse/components/card';


const funcionarioRoute: Route[] = [
    {
        path     : '',
        component: FuncionarioComponent
    },
    {
      path   : 'edit/:id',
      component: DetailFuncionarioComponent
    },
    {
      path   : 'new',
      component: DetailFuncionarioComponent
    }

];


@NgModule({
  declarations: [
    FuncionarioComponent,
    DetailFuncionarioComponent
  ],
  imports: [
    RouterModule.forChild(funcionarioRoute),
    FormsModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FuseCardModule
  ]
})
export class FuncionarioModule { }