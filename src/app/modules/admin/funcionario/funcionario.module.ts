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
import { SharedModule } from "../../../shared/shared.module";
import { FormComponent } from 'app/shared/component/form/form.component';


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
    },
    {
        path     : 'dialog',
        component: DetailFuncionarioComponent
    },
    {
        path     : 'genericForm',
        component: FormComponent
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
        FuseCardModule,
        SharedModule
    ]
})
export class FuncionarioModule { }
