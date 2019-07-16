import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiveRoutingModule } from './give-routing.module';
import { GiveComponent } from './give.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, GiveRoutingModule, PageHeaderModule],
    declarations: [GiveComponent]
})
export class GiveModule {}
