import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from './pizza.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Route, RouterModule } from '@angular/router';
import { FuseCardModule } from "../../../../@fuse/components/card/card.module";
import { MatIconModule } from '@angular/material/icon';

const pizzaRoute: Route[] = [
    {
        path     : '',
        component: PizzaComponent
    }
];

@NgModule({
    declarations: [
        PizzaComponent
    ],
    imports: [
        RouterModule.forChild(pizzaRoute),
        CommonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        FuseCardModule
    ]
})
export class PizzaModule { }
