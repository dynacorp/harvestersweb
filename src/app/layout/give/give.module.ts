import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiveRoutingModule } from './give-routing.module';
import { GiveComponent } from './give.component';
import { PageHeaderModule } from './../../shared';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [CommonModule, GiveRoutingModule, PageHeaderModule, ReactiveFormsModule],
    declarations: [GiveComponent]
})
export class GiveModule {}
