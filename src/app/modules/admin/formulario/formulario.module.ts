import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFormularioComponent } from './form-formulario/form-formulario.component';
import { ListFormularioComponent } from './list-formulario/list-formulario.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FuseCardModule } from '@fuse/components/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { TranslocoModule, translocoConfig } from '@ngneat/transloco';
import { SharedModule } from "../../../shared/shared.module";
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';




export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

const formRoute: Route[] = [
  {
      path     : '',
      component: ListFormularioComponent
  },
  {
    path     : 'new',
    component: FormFormularioComponent
  },
  {
    path     : 'edit/:id',
    component: FormFormularioComponent
  }
];



@NgModule({
    declarations: [
        FormFormularioComponent,
        ListFormularioComponent
    ],
    imports: [
        FormsModule,
        MatButtonModule,
        CommonModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatDividerModule,
        MatDatepickerModule,
        MatIconModule,
        MatFormFieldModule,
        NgxMaskModule.forRoot(),
        MatInputModule,
        MatSelectModule,
        FuseCardModule,
        RouterModule.forChild(formRoute),
        CommonModule,
        TranslocoModule,
        MatMenuModule,
        SharedModule,
        MatTableModule,
        MatCheckboxModule,
    ]
})
export class FormularioModule { }
