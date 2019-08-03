import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { PageHeaderModule } from './../../shared';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, EventsRoutingModule, PageHeaderModule, ReactiveFormsModule],
    declarations: [EventsComponent]
})
export class EventsModule {}
