import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquiriesRoutingModule } from './enquiries-routing.module';
import { EnquiriesComponent } from './enquiries.component';

@NgModule({
    imports: [CommonModule, EnquiriesRoutingModule],
    declarations: [EnquiriesComponent]
})
export class EnquiriesModule {}
