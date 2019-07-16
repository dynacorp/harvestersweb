import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TestimoniesRoutingModule } from './testimonies-routing.module';
import { TestimoniesComponent } from './testimonies.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        TestimoniesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        PageHeaderModule
    ],
    declarations: [
        TestimoniesComponent
    ]
})
export class TestimoniesModule {}
