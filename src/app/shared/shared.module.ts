import { NgModule } from '@angular/core';
import { CommonModule, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuseCardModule } from '@fuse/components/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import { FormComponent } from './component/form/form.component';
import { MatButtonModule } from '@angular/material/button';
import { DialogListComponent } from './component/dialog-list/dialog-list.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { GenericListComponent } from './component/generic-list/generic-list.component';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FuseCardModule,
        MatIconModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatStepperModule,
        MatCheckboxModule,
        MatListModule,
        MatRadioModule,
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule,
        NgSwitch,
        NgSwitchCase,
        NgSwitchDefault
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatStepperModule,
        GenericListComponent
    ],
    declarations: [
    
    FormComponent,
          DialogListComponent,
          GenericListComponent
  ]
})
export class SharedModule
{
}
