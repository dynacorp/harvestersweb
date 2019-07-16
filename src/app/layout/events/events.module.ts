import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, EventsRoutingModule, PageHeaderModule],
    declarations: [EventsComponent]
})
export class EventsModule {}
